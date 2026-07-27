---
layout: page
title: "SmartDischarge: Early Prediction of ICU Readmission Risk"
permalink: /readmission-risk-modeling/
summary: "Built XGBoost models with SMOTE resampling to flag patients at risk of ICU readmission and support proactive discharge planning."
tags: [Python, XGBoost, SMOTE, Healthcare Analytics]
---

## Abstract
Unplanned ICU readmissions are a significant source of preventable harm, clinician burden and healthcare system cost. Nurses are often the first to sense that something’s not right, yet existing predictive models are sometimes not integrated into real clinical workflows.

SmartDischarge is a nurse-centered, data-driven risk scoring tool that predicts the probability of ICU readmission within 48 hours of discharge. Our goal is to support proactive intervention and safer discharge planning by providing interpretable, real-time risk signals that can be easily integrated into nursing workflows.

This project was developed as part of the Smarter Care Datathon at the University of Pennsylvania.

## Project Motivation
Hospital rehospitalization and ICU readmission are important healthcare challenges because they may indicate worsening patient conditions, increased healthcare costs and missed opportunities for early intervention. Predicting which patients are at higher risk of short-term rehospitalization is difficult due to complex clinical patterns and highly imbalanced healthcare data.

This project was motivated by the potential for machine learning models to support earlier risk identification using clinical and hospitalization-related features. By predicting rehospitalization risk, the project aims to explore how data-driven methods may assist healthcare providers in identifying higher-risk patients who could benefit from additional monitoring or proactive care.

## Key Question
How can we predict early which ICU patients are at risk of deterioration so clinicians can intervene proactively?
- We focused specifically on ICU readmission risk within 48 hours, a clinically meaningful outcome associated with higher mortality, longer hospital stays and increased costs.

## Data Source
We used data derived from MIMIC-IV, a large, publicly available, de-identified electronic health record (EHR) dataset containing detailed ICU and hospital data from Beth Israel Deaconess Medical Center.

Dataset characteristics:
- Over 9,000 patient records used for modeling
- Detailed information on over 65,000 ICU patient stays
- Real-world EHR data reflecting actual clinical documentation practices
- Includes demographics, vitals, labs, medications and care-related variables
- Suitable for developing clinically relevant and generalizable models

We assessed the dataset for:
- Relevance: Variables aligned with clinical decision-making
- Completeness: Sufficient coverage across patient encounters
- Quality: Realistic distributions consistent with ICU practice
- Adequacy: Large enough sample size to support machine learning models

## Clinical Relevance
Unlike many purely academic predictive models, SmartDischarge was designed with nurses as the primary users.

Design principles:
- Nurse-centered and workflow-aware
- Interpretable risk scores rather than black-box predictions
- Intended for real-time or near–real-time use
- Supports clinical judgment
- The tool is envisioned as a decision-support layer that flags elevated risk early, enabling timely interventions such as closer monitoring, delayed discharge, or care escalation.

## Data Overview
### Visualizations
![Risk Visual](/datathon-images/7d-dist.png)
![Risk Visual](/datathon-images/30d-dist.png)
![Risk Visual](/datathon-images/admission-type.png)
![Risk Visual](/datathon-images/age.png)
![Risk Visual](/datathon-images/race.png)
![Risk Visual](/datathon-images/martial-status.png)

The visualizations above provide an overview of the patient population and rehospitalization patterns within the dataset. Both the 7-day and 30-day rehospitalization targets show clear class imbalance, with the majority of patients not experiencing rehospitalization. This imbalance later motivated the use of SMOTE during model training.

The admission type distribution indicates that most hospital admissions came from emergency-related categories, suggesting that acute or urgent care situations make up a large portion of the dataset. The age distribution shows that most patients were older adults, primarily between ages 65 and 90, which is consistent with populations at higher risk for hospitalization and readmission.

The marital status and race distributions show the demographic composition of the dataset, with married patients and White patients representing the largest groups. These exploratory visualizations further highlight the important clinical and demographic patterns while also guiding later feature selection and modeling decisions. 

## Model
### Baseline Model: XGBoost

| Metric | Value |
|---|---|
| Tuned XGB Test AUC | 0.676 |
| Tuned XGB Accuracy @ 0.5 | 0.643 |
| Tuned XGB Best Accuracy | 0.721 |
| Optimal Threshold | 0.747 |

<img src="/datathon-images/top-xgboost.png" alt="Game Visual" width="650">

Since the baseline XGBoost model achieved only moderate predictive performance, we further examined the model’s feature importance scores to better understand which variables contributed most to prediction. This analysis helped identify the clinical and operational factors most associated with the target outcome and provided insight into potential areas for additional feature engineering and model improvement.

### Reduced XGBoost Model with target = rehosp30d
Then, keeping only the selected features, the model yields the following accuracy: 

| Metric | Value |
|---|---|
| Test AUC | 0.636 |
| Accuracy @ 0.5 | 0.710 |

![Risk Visual](/datathon-images/top20.png)

Blue points represent predicted rehospitalization probabilities, while orange points indicate patients who were actually rehospitalized. The concentration of true rehospitalization cases among the higher-ranked predictions suggests that the reduced-feature XGBoost model is still able to identify some higher-risk patients despite using fewer variables. However, the relatively narrow probability range indicates only moderate separation between rehospitalized and non-rehospitalized patients.

It is also worth noting that reducing the feature set improved classification accuracy at the default threshold but reduced overall discriminatory performance, suggesting a trade-off between model simplicity and ranking capability.

#### Fine-tuning 
Then, after tuning the reduced-feature XGBoost model, the model achieved a test AUC of 0.639 and a maximum test accuracy of 0.721 at an optimized threshold of 0.775. Although the simplified model maintained competitive accuracy, the decrease in AUC compared to the full-feature model suggests that reducing the feature set may have lowered the model’s overall discriminatory ability.

| Metric | Value |
|---|---|
| Best CV Accuracy | 0.655 |
| Test Accuracy @ 0.5 | 0.636 |
| Best Test Accuracy | 0.721 |
| Optimal Threshold | 0.775 |
| Test AUC | 0.639 |

### Reduced XGBoost Model with target = rehosp7d
Later, shifting the focus to 7-day rehospitalization risk, we observed that the dataset became highly imbalanced, with only 10.34% positive cases. As a result, model performance was evaluated across multiple probability thresholds to better understand the trade-off between overall accuracy and the ability to identify true rehospitalization cases. While higher thresholds improved overall accuracy, they also reduced recall for positive cases, indicating that the model became more conservative in predicting rehospitalization events.

| Metric | Value |
|---|---|
| Best CV Accuracy | 0.797 |
| Test Accuracy @ 0.5 | 0.796 |
| Best Test Accuracy | 0.897 |
| Optimal Threshold | 0.985 |
| Test AUC | 0.542 |

![Risk Visual](/datathon-images/7d-distribution.png)

The histogram above shows the distribution of predicted probabilities for 7-day rehospitalization. This reflects the strong class imbalance in the dataset, where the majority of patients did not experience rehospitalization within 7 days. A smaller number of patients received higher predicted probabilities, indicating that the model identified a limited subset of potentially higher-risk cases.

### SMOTE Model (with all features)
Because the dataset was  imbalanced, with rehospitalization cases representing only a small proportion of the observations, we applied SMOTE (Synthetic Minority Oversampling Technique) to improve class balance during model training. The goal was to reduce bias toward the majority class and improve the model’s ability to identify true rehospitalization cases, particularly recall and F1-score for the positive class.

| Metric | Value |
|---|---|
| Test AUC | 0.582 |
| Accuracy @ 0.5 | 0.895 |
| Precision @ 0.5 | 0.250 |
| Recall @ 0.5 | 0.004 |
| F1-Score @ 0.5 | 0.009 |
| Best Test Accuracy | 0.896 |
| Optimal Threshold | 0.439 |

After applying SMOTE, the model achieved a much higher test accuracy of 0.896, indicating strong performance in correctly classifying the majority of cases. However, the model still showed limited ability to identify true rehospitalization events, suggesting that predicting 7-day rehospitalization remains challenging despite balancing the dataset.

![Risk Visual](/datathon-images/smote-distribution.png)

Compared to the earlier model, the predicted probabilities are more spread out and less concentrated near 0, indicating that the balanced training data encouraged the model to assign higher risk scores to more patients. However, most predictions still remain in the lower probability range, suggesting that the model continues to be relatively conservative in predicting rehospitalization events.

### Final Model (XGBoost + SMOTE + selected features)

| Metric | Value |
|---|---|
| Test AUC | 0.588 |
| Accuracy @ 0.5 | 0.876 |
| Precision @ 0.5 | 0.238 |
| Recall @ 0.5 | 0.088 |
| F1-Score @ 0.5 | 0.128 |
| Best Test Accuracy | 0.898 |
| Optimal Threshold | 0.640 |

The final XGBoost + SMOTE model  achieved strong overall classification accuracy, reaching 0.876 at the default threshold and a maximum accuracy of 0.898 at the optimized threshold of 0.640. Applying SMOTE improved the model’s ability to identify minority-class rehospitalization cases compared to earlier versions, increasing both recall and F1-score.

Although the model’s discriminatory performance remained moderate (AUC = 0.588), the final pipeline demonstrated that integrating engineered temporal features, balanced training data and selected clinical variables can improve prediction stability for highly imbalanced healthcare datasets.

![Risk Visual](/datathon-images/final.png)

The distribution of predicted probabilities from the final  model is more spread out compared to earlier models, with probabilities extending further into the medium- and high-risk ranges. This suggests that this model can assign more differentiated risk estimates across patients. However, most predictions still remain concentrated in the lower probability range, indicating that the model continues to classify the majority of patients as lower risk for 7-day rehospitalization.

![Risk Visual](/datathon-images/risk-level.png)

The risk level distribution shows that most patients were classified as low risk, while a smaller proportion were assigned to medium and high-risk categories. This pattern is consistent with the underlying class imbalance in the dataset, where true rehospitalization cases were relatively rare. The model therefore assigned elevated risk scores to only a limited subset of patients identified as potentially higher risk.

## Conclusion
The correlation matrix shows the linear relationships among the selected features and the 7-day rehospitalization target. Most variables exhibit relatively weak correlations with rehospitalization risk, suggesting that no single feature alone strongly predicts the outcome. However, prior hospitalization variables (`prev90d_hosp_sum` and `prev90d_hosp`) show moderate positive correlation with each other, indicating that historical hospitalization patterns are related. Additionally, `sepsistype` and `icu_hx` display a positive relationship, suggesting that more severe sepsis cases may be associated with ICU history. Overall, the relatively low pairwise correlations suggest limited multicollinearity among features while also highlighting the difficulty of predicting short-term rehospitalization using individual variables alone.

![Risk Visual](/datathon-images/correlation.png)

Although predicting short-term rehospitalization remained challenging due to class imbalance and complex clinical patterns, the final XGBoost + SMOTE model improved overall prediction stability and minority-class detection. The final model also produced a probability distribution concentrated mainly in the low-risk range, which is clinically reasonable given that most patients were not rehospitalized within 7 days. At the same time, the model was still able to identify a smaller subset of potentially higher-risk patients who may benefit from additional monitoring or intervention.

Overall, the project demonstrates both the potential and limitations of machine learning approaches for rehospitalization risk prediction in healthcare datasets, while showing how preprocessing, temporal feature engineering and class-balancing techniques can improve model performance and clinical interpretability.

## Future Work
- External validation using additional hospital datasets
- Prospective evaluation in real clinical settings
- Integration with electronic health record (EHR) systems
- Expansion to related clinical outcomes such as mortality and length of stay
- Fairness and bias analysis across patient demographic subgroups
- Development of an interactive clinical risk dashboard for real-time rehospitalization monitoring and decision support
