---
layout: page
title: "Readmission Risk Modeling"
permalink: /readmission-risk-modeling/
---

# SmartDischarge: Early Prediction of ICU Readmission Risk

## Abstract
Unplanned ICU readmissions are a significant source of preventable harm, clinician burden and healthcare system cost. Nurses are often the first to sense that something’s not right, yet existing predictive models are sometimes not integrated into real clinical workflows.

SmartDischarge is a nurse-centered, data-driven risk scoring tool that predicts the probability of ICU readmission within 48 hours of discharge. Our goal is to support proactive intervention and safer discharge planning by providing interpretable, real-time risk signals that can be easily integrated into nursing workflows.

This project was developed as part of the Smarter Care Datathon at the University of Pennsylvania.

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
- Supports — not replaces — clinical judgment
- The tool is envisioned as a decision-support layer that flags elevated risk early, enabling timely interventions such as closer monitoring, delayed discharge, or care escalation.

## Data Overview
### Visualizations
![Risk Visual](/datathon-images/7d-dist.png)
![Risk Visual](/datathon-images/30d-dist.png)
![Risk Visual](/datathon-images/admission-type.png)
![Risk Visual](/datathon-images/age.png)
![Risk Visual](/datathon-images/race.png)
![Risk Visual](/datathon-images/martial-status.png)

## Model
### Baseline Model: XGBoost
— Tuned XGB Test AUC: 0.676
— Tuned XGB Accuracy @0.5: 0.643
— Tuned XGB Best Accuracy: 0.721 at threshold 0.747

![Risk Visual](/datathon-images/top-xgboost.png)

Since the baseline XGBoost model achieved only moderate predictive performance (Test AUC = 0.676), we further examined the model’s feature importance scores to better understand which variables contributed most to prediction. This analysis helped identify the clinical and operational factors most associated with the target outcome and provided insight into potential areas for additional feature engineering and model improvement.
