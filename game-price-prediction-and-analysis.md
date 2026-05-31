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
#### Distribution of Voted Up Reviews
![Game Visual](/game-images/votes.png)

The bar chart shows that most reviews are marked as “voted up,” meaning the majority of players gave a positive review. This imbalance reflects typical behavior on Steam, where satisfied users are more likely to leave feedback than dissatisfied ones.

#### Distribution of Reviews Language
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

#### Distribution of Currency Count 
![Game Visual](/game-images/currency.png)

The distribution of the currency is unbalanced as the USD consists of the majority of the dataset, with all other currencies appearing at much lower frequencies. So, we would later convert all of the game prices into USD to make the computation and interpretation easier.

#### Distribution of Price
![Game Visual](/game-images/price-frequency.png)

The price distribution is heavily concentrated at low price points, with common pricing tiers like 1 - 5 dollars showing the highest frequencies. A noticeable spike also appears at 10 dollars, reflecting another popular pricing threshold. Beyond 15 dollars, the number of games drops sharply, showing that most Steam games are priced under 20 dollars.

### Genre-related Features
#### Distribution of the Top Genres
![Game Visual](/game-images/genre.png)

This bar plot shows that a few dominant genres make up a large share of the platform, while many others are represented much less frequently.

#### Heat map of Numerical Columns
![Game Visual](/game-images/correlation.png)

The heat map shows that `mat_initial_price` does not show meaningful correlation with any of the numerical review or user-behavior features in the dataset. This suggests that variables like playtime, number of games owned, review helpfulness or engagement metrics do not directly explain how a game is priced. If our goal is to predict price, these numeric features alone are likely insufficient. However, they may still become useful when combined with other information. For example, through nonlinear models like Random Forests or interactions with genre or release year. The weak correlations highlight the need to incorporate additional features or more complex relationships to predict price successfully.

## Feature Engineering
Timestamp columns were converted into a datetime format, and additional numerical features such as release year and release month were extracted from time-related columns. Categorical variables were encoded into machine-readable formats. The target variable game price (`mat_initial_price`) was renamed to `price` and standardized to USD for consistency across currencies. Redundant or uninformative columns were removed, and the datasets were merged into a final integrated dataframe for analysis and prediction.

## Model
We applied Principal Component Analysis (PCA) to improve model efficiency and performance when working with a high-dimensional feature space. The dataset contains over 70 numerical and one-hot encoded features, so dimensionality reduction helps reduce feature redundancy, noise and multicollinearity. Before applying PCA, all features were standardized using StandardScaler. To determine the optimal number of principal components, we analyzed the cumulative explained variance across components. Based on the results, we selected 45 principal components, which preserved approximately 80% of the total variance in the dataset.

### Baseline Model: Linear Regression
- using StandardScaler to normalize all numeric features


### CatBoost
### XGBoost
### Random Forest

## Conclusion and Discussion
