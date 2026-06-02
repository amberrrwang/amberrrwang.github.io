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
1. Text Normalization: The original Title was converted to lowercase and stripped of non-alphanumeric characters using regular expressions. This standardization helped in reducing variability caused by capitalization and punctuation.
2. Stopword Removal: Common English stopwords were removed to retain only the meaningful words that contribute to the headline’s semantic content.
3. Lemmatization: Words were lemmatized to their base forms using NLTK’s WordNetLemmatizer, which helps in reducing different forms of a word to a common base, thereby improving the model’s ability to generalize.
4. Handling Missing Data: Any rows with missing or empty Title values after cleaning were removed to ensure data integrity.
