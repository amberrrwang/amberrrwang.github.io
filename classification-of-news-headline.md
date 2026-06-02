---
layout: page
title: "Classification of News Headline"
permalink: /classification-of-news-headline/
---

# Classification of News Headline

## Abstract
This project builds a text classification pipeline to predict the news source of a given headline, demonstrating an end-to-end NLP workflow including data preprocessing, feature extraction, model training and evaluation. Using a dataset of 3,805 headlines from Fox News and NBC News, we compared traditional machine learning and deep learning approaches, including Support Vector Machines (SVM) and BERT models. Preprocessing steps included text normalization, stopword removal and lemmatization.

The project was completed as part of the Applied Machine Learning course at the University of Pennsylvania.

## Data Cleaning
After collecting the raw data, a thorough cleaning process was undertaken to prepare the dataset for analysis
and model training. The cleaning steps involved:
1. **Text Normalization**: The original Title was converted to lowercase and stripped of non-alphanumeric characters using regular expressions. This standardization helped in reducing variability caused by capitalization and punctuation.
2. **Stopword Removal**: Common English stopwords were removed to retain only the meaningful words that contribute to the headline’s semantic content.
3. **Lemmatization**: Words were lemmatized to their base forms using NLTK’s WordNetLemmatizer, which helps in reducing different forms of a word to a common base, thereby improving the model’s ability to generalize.
4. **Handling Missing Data**: Any rows with missing or empty Title values after cleaning were removed to ensure data integrity.

## Model

## Key Findings
### Final Model: BERT
RoBERTa showed signs of overfitting despite high training accuracy. BERT was chosen for its more stable test performance and stronger generalization.

### SVM vs BERT Trade-off
With extensive feature engineering, SVM achieved accuracy comparable to BERT, but its performance was highly sensitive to vectorization and feature choices.

### Robustness of Contextual Embeddings
BERT’s contextual embeddings capture semantic differences across varying text inputs, making it more robust for headline classification tasks with high linguistic variability.

### Interpretability vs Stability
SVM provides greater interpretability through explicit features, while BERT reduces manual preprocessing and offers more consistent performance.
