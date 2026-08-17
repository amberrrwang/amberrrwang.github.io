---
layout: page
title: "Game Price Prediction and Analysis"
permalink: /game-price-prediction-and-analysis/
summary: "Built and compared CatBoost, Random Forest and XGBoost models on Steam game data to uncover what drives app pricing."
tags: [Python, XGBoost, CatBoost, Random Forest, Feature Engineering, Predictive Modeling, Pricing Analytics]
---

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
![Game Visual](/game-images/vote.png)

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
#### Distribution of Types
![Game Visual](/game-images/type.png)

The majority of Steam applications in our dataset are classified as games, with nearly twice as many entries as DLCs. Music products make up only a very small fraction.

#### Distribution of Currency Count 
<img src="/game-images/currency.png" alt="Game Visual" width="750">

The distribution of the currency is unbalanced as the USD consists of the majority of the dataset, with all other currencies appearing at much lower frequencies. So, we would later convert all of the game prices into USD to make the computation and interpretation easier.

#### Distribution of Price
<img src="/game-images/price-frequency.png" alt="Game Visual" width="750">

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

To evaluate the impact of dimensionality reduction, we compared model performance before and after applying PCA.

| Model | MAE | RMSE | R² |
|---|---|---|---|
| Scaled Features Only | 8.49 | 14.99 | 0.246 |
| PCA-Transformed Features | 8.51 | 15.12 | 0.232 |

The results show that the model trained on scaled features without PCA slightly outperformed the PCA-transformed model across all evaluation metrics. While PCA reduced dimensionality and computational complexity, it also resulted in a small loss of predictive information. Thus the scaled-only dataset provided better overall prediction performance for game price estimation.

### CatBoost Model
- using the scaled feature set (non-PCA)

| MAE | RMSE | R² |
|---|---|---|
| 5.595 | 9.855 | 0.674 |

Performance improved substantially compared to Linear Regression, achieving an  𝑅2  of 0.674. This demonstrates that boosting-based tree models can capture more representation of pricing behavior.

### Random Forest Model
- using the scaled feature set (non-PCA)

| MAE | RMSE | R² |
|---|---|---|
| 3.306 | 7.926 | 0.789 |

Random Forest has the best baseline performance, with an  𝑅2  of 0.78, highlighting the importance of maintaining full feature dimensionality.

These baseline results provide two key insights:
- Tree-based ensemble methods significantly outperform linear modeling approaches.
- PCA is not beneficial for models designed to learn nonlinear relationships.

## Hyperparameter Tuning
To improve prediction performance, we applied hyperparameter tuning to both the CatBoost and Random Forest models to optimize their learning behavior and reduce prediction error (using the non-PCA features). In addition, we developed an XGBoost model to compare the performance of different ensemble learning approaches for game price prediction.

### Final Modeling Results Comparison
### CatBoost

| Metric | Before Tuning | After Tuning |
|---|---|---|
| MAE | 5.595 | 3.5939 |
| RMSE | 9.855 | 6.5427 |
| R² | 0.674 | 0.8562 |

### Random Forest

| Metric | Before Tuning | After Tuning |
|---|---|---|
| MAE | 3.306 | 2.269 |
| RMSE | 7.927 | 6.845 |
| R² | 0.789 | 0.843 |

### XGBoost

| Metric | Before Tuning | After Tuning |
|---|---|---|
| MAE | 5.108 | 3.818 |
| RMSE | 9.008 | 7.447 |
| R² | 0.727 | 0.814 |

Overall, hyperparameter tuning significantly improved model performance across all three models. Among them, the tuned CatBoost model achieved the highest R² score, while the tuned Random Forest model produced the lowest prediction errors.

### Feature Importance Analysis
<img src="/game-images/catboost-pie.png" alt="Game Visual" width="500">

The CatBoost model identified language availability, genre features, and release timing as the strongest drivers of game price. Player engagement and review-related metrics had relatively lower influence on pricing predictions.

<img src="/game-images/random-forest-pie.png" alt="Game Visual" width="500">

The Random Forest model showed a similar pattern, with language availability and genre features contributing most to price prediction. Release timing also played an important role, while player activity and review metrics were less impactful.

<img src="/game-images/xgboost-pie.png" alt="Game Visual" width="500">

The XGBoost model placed the greatest emphasis on genre features, followed by language availability and release timing. Compared to the other models, XGBoost relied more heavily on genre-related information to determine pricing patterns.

## Main Takeaways
### Model Performance
- The best-performing model was the tuned CatBoost model, achieving a test R² score of 0.8562.
- While hyperparameter tuning significantly improved all three models, with CatBoost showing the largest improvement, PCA did not improve model performance for the selected models.
- Tree-based ensemble methods clearly outperformed simpler models, suggesting that game pricing is influenced by nonlinear interactions, heterogeneous features and complex market patterns.
- Despite strong performance, some variance remains unexplained (R² ≈ 0.86), indicating that game pricing may also depend on external factors not included in the dataset, such as publisher reputation, marketing campaigns or seasonal discounts.

### Feature Importance
- The strongest predictors of game price were product-level attributes such as supported language count, genre categories, and release or update timing.
- In contrast, review engagement and user activity metrics were less influential, suggesting that pricing is driven more by inherent game characteristics and lifecycle factors than by community popularity or player behavior.

### Factors That Improved Model Performance
- Model performance improved most when tuning increased model capacity (deeper trees, more estimators/iterations) while also incorporating regularization techniques such as subsampling, leaf constraints, and early stopping.
- These adjustments allowed the models to capture complex pricing relationships while reducing overfitting and improving generalization.

### Limitations
- The models did not include contextual information such as game descriptions, review text, sentiment or marketing-related features that may influence pricing.
- Genre features were one-hot encoded, creating sparse data that may limit the model’s ability to capture similarities between related genres.
- External market factors such as publisher reputation, seasonal sales, promotional events and competing game releases were not included.

## Business Implications
- Core product attributes such as language availability, genre and release timing were among the strongest predictors of game price, showing that pricing is heavily influenced by product positioning and lifecycle strategy.
- Broader language support and certain genres were associated with higher price ranges, suggesting that market reach and genre expectations play an important role in pricing decisions.
- In contrast, review engagement and player activity metrics were less influential, indicating that initial pricing is driven more by inherent game characteristics than by post-launch popularity.
- These findings can help developers, publishers and managers better understand pricing patterns within the Steam marketplace and support more informed pricing and positioning decisions.
  
### Potential Improvements
- Incorporate NLP-based features from game descriptions and user reviews.
- Explore embedding-based methods for representing genres.
- Include external market and publisher-related information to better capture real-world pricing behavior.
- Expand the application into a decision-support system that helps product and project managers estimate and evaluate pricing strategies for new game releases.
