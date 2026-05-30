---
layout: page
title: "Steam Applications Price Prediction and Analysis"
permalink: /game-price-prediction-and-analysis/
---

# Game Price Prediction and Analysis

## Abstract
This is a data science and analytics project that uses historical Steam application data to build and evaluate machine learning models that predict app prices. The project explores data preprocessing, feature engineering, model training and evaluation to understand how different game characteristics influence pricing. In addition to prediction, the analysis examines how factors such as genres, release timing, platform support and user engagement metrics relate to pricing patterns in the Steam marketplace. It also demonstrates how analytics and machine learning can support pricing analysis and data-driven business decisions.

The project was completed as part of the Big Data Analytics course at the University of Pennsylvania.

## Project Motivation
This project analyzes factors that influence game pricing and explores pricing strategies within the digital gaming market. By examining features such as genre, ratings, multiplayer support, release year and publisher characteristics, the project aims to understand how developers determine game prices. These insights can help developers set competitive prices for new releases while also helping consumers evaluate pricing fairness in the gaming market.

## Data Source
The dataset is derived from publicly available Steam application metadata, containing records and over 70 features per game. Key variables include:
- Pricing information (initial price, discounts)
- Game attributes (genres, categories, release date)
- User engagement metrics (reviews, playtime statistics)
- Platform and language support
- Developer and publisher information
- Extensive preprocessing was required to address missing values, high-cardinality categorical variables, skewed distributions and outliers commonly observed in game pricing data.

## Data Preprocessing
The datasets were cleaned by removing redundant columns, handling missing values and filtering incomplete records. Non-informative features such as timestamps, image links and columns with excessive missing values were dropped. Rows missing key variables, including game price and release information, were also removed. In addition, a genre mapping table was created to link each game with all associated genres for further pricing analysis.

## Exploratory Data Analysis/ Data Overview
### Review-related Features
### Distribution of Voted Up Reviews
![Game Visual](/game-images/votes.png)

The bar chart shows that most reviews are marked as “voted up,” meaning the majority of players gave a positive review. This imbalance reflects typical behavior on Steam, where satisfied users are more likely to leave feedback than dissatisfied ones.

### Distribution of Reviews Language
![Game Visual](/game-images/language.png)

The distribution of review languages is highly imbalanced, with English dominating the dataset and Simplified Chinese and Russian following. The majority of remaining languages have fewer than 100,000 reviews, and many fall below 10,000. Thus we will later consolidate all languages with fewer than 10,000 reviews into a single category labeled “other” to reduce noise.

#### Distribution of Comment Count
![Game Visual](/game-images/comment-count.png)

The distribution of comment counts is right-skewed, with a majority of reviews receiving little to no comments. The tall bar on the left shows that most reviews fall in the 0 - 10 comment range, even when plotted on a log scale. Overall, this indicates that meaningful discussion happens on only a tiny fraction of reviews.

#### Distribution of Weighted Vote Score
![Game Visual](/game-images/weighted-vote-score.png)

The weighted_vote_score is a 0 to 1 helpfulness metric, but the histogram shows that almost all reviews cluster tightly around 0.50. This is because Steam applies a Bayesian weighted scoring system that keeps low-vote reviews near a neutral value.

### Application-related Features
#### Count of Types
![Game Visual](/game-images/type.png)

The majority of Steam applications in our dataset are classified as games, with nearly twice as many entries as DLCs. Music products make up only a very small fraction.

## Feature Engineering

## Model
### Linear Regression
### CatBoost
### XGBoost
### Random Forest

## Conclusion and Discussion
