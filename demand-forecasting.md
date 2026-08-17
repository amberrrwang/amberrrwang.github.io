---
layout: page
title: "Demand Forecasting Challenge"
permalink: /demand-forecasting-challenge/
summary: "Built and compared Naive Baseline, Prophet and XGBoost models on 5 years of store-item level retail sales data to forecast future demand."
tags: [Python, Prophet, XGBoost, Time Series, Forecasting, Supply Chain, Demand Planning]
---

## Abstract
This is a time series demand forecasting project that uses 5 years of historical store-item level retail sales data to predict future demand. The project explores exploratory data analysis, time series decomposition, feature engineering and model comparison to understand what drives sales patterns across different stores and items. In addition to prediction, the analysis examines how trend, seasonality and short-term sales momentum relate to forecasting accuracy. It also demonstrates how forecasting models can support inventory planning and replenishment decisions in a supply chain context.

## Project Motivation
Demand forecasting is a core analytical skill in supply chain and retail operations, where accurate forecasts directly inform inventory planning, replenishment cycles and stockout prevention. This project was undertaken to apply forecasting techniques to a supply chain context, using the Kaggle Store Item Demand Forecasting dataset to predict daily sales for 10 stores and 50 items and comparing a seasonal baseline against Prophet and XGBoost to identify which approach best captures underlying demand patterns.

## Key Question
This project set out to answer three core questions:
1. Which forecasting approach, seasonal baseline, Prophet or XGBoost, produces the most accurate demand forecasts across 500 store-item combinations?
2. What features drive short-term demand the most: recent sales momentum, calendar effects (day of week, month) or long-term seasonality (same period last year)?
3. Do individual stores and items require separate models, or can a single global model capture shared demand patterns across locations and products?

## Dataset
The dataset is from Kaggle's Store Item Demand Forecasting Challenge, containing daily sales records from 2013–2017 across 10 stores and 50 items. Key variables include:
- date – date of the sale record
- store – store ID (1–10)
- item – item ID (1–50)
- sales – number of units sold at a given store, for a given item, on a given day

The dataset explicitly excludes holiday effects and store closures, so all observed seasonality reflects underlying demand patterns rather than calendar disruptions.

## Exploratory Data Analysis

### Overall Sales Trend

![Total Daily Sales](demand-images/total_sales.png)
Total daily sales across all stores and items rose from a range of roughly 12,000–17,000 units in early 2013 to 17,000–27,000 units by late 2017. This shows a clear multi-year upward trend, also a strong, repeating annual cycle: sales peak each summer (reaching ~40,000–45,000 units by 2016–2017) and trough each winter (~15,000–17,000 units), with the amplitude of these seasonal swings also growing year over year alongside the overall trend.
  
### Seasonal Decomposition

![Seasonal Decomposition](demand-images/total_decomp.png)
Decomposing the series into trend, seasonal, and residual components isolates what the raw sales chart only shows visually. The trend component confirms a steady, near-linear increase in baseline demand, rising from roughly 22,000 units in early 2013 to nearly 30,000 units by late 2017. The seasonal component captures a consistent annual cycle of about ±10,000 units around that trend, peaking mid-year and troughing in January. This cycle stays essentially constant in shape and amplitude across all five years, which indicates that the growing seasonal swings visible in the raw sales chart were actually driven by the rising trend, not by seasonality itself intensifying. The residuals show no systematic pattern or widening spread over time, suggesting that an additive decomposition is an appropriate fit for this data.

### Day-of-Week Effect

![Average Sales by Day of Week](demand-images/avg_sales.png)
Day-of-week effect:
Average sales rise steadily across the week, from about 41 units on Mondays (dayofweek = 0) to about 62 units on Sundays (dayofweek = 6), an increase of roughly 50%. The climb is fairly gradual through midweek before accelerating into the weekend, with Friday, Saturday, and Sunday consistently the highest-selling days. This pattern is stable enough to be a reliable predictive signal rather than noise, which is confirmed later by its ranking in the XGBoost feature importance results.

### Store-Level Comparison

![Total Sales by Store](demand-images/total_by_store.png)
Total sales range from about 6.1 million units at the top-performing store (Store 2) down to about 3.3 million at the lowest (Store 7), a gap of roughly 1.8x. The drop-off between stores is gradual rather than sharp, so there isn't a natural cutoff point separating "high" and "low" performing stores. As shown earlier, each store follows the same seasonal and weekly pattern, meaning the difference between stores comes down to overall scale rather than a different sales pattern.

![Total Sales by Store](demand-images/sales_trend.png)
Plotting each store's daily sales over time confirms why: the curves for all 10 stores are nearly identical in shape, tracking the same seasonal cycle and overall growth trend. The only meaningful difference between stores is their sales level, not their pattern. This means seasonality and trend can be modeled once and shared across stores, rather than fit separately for each one — a key reason for choosing a single global model over 10 store-specific models later on.

### Item-Level Comparison

![Top 10 Items by Total Sales](demand-images/top_items.png)
The top 10 items range from about 1.61 million units (Item 15, the highest) down to about 1.41 million units (Item 8, the lowest), a gap of only 14%, much narrower than the 1.8x spread seen across stores. There is no clear 80/20 concentration effect where a handful of items dominate total sales; instead, demand is fairly evenly distributed across the top-selling items. This suggests inventory risk is spread across a broad product base rather than concentrated in a small number of bestsellers that would need outsized safety stock.

### Store x Item Interaction

![Store x Item Heatmap](demand-images/heatmap.png)
The heatmap shows consistent vertical banding across all 10 stores, meaning the same items are consistently strong or weak sellers regardless of location (for example, Items 15 and 28 are dark across every row, while Item 1 stays light across every row). If regional preference played a meaningful role, this pattern would break down into more of a checkerboard, with different items standing out in different stores. Instead, item popularity is a store-independent property of the item itself. Combined with the store-level finding above, this confirms that both seasonality and item preference are shared across stores, reinforcing the decision to train a single global model rather than separate models per store or per item.

## Forecasting Models
### Baseline: Naive Seasonal Baseline
Forecasts each day's sales as equal to the same day one year prior, providing a minimum performance bar with no statistical modeling involved.

**MAPE: 23.42%** | **RMSE: 14.96**

### Model 2: Prophet
An additive time series model fit independently for each of the 500 store-item combinations, automatically decomposing each series into trend, weekly seasonality, and yearly seasonality.

![Prophet Forecast](demand-images/prophet.png)

![Prophet Components](demand-images/prophet_comp.png)

The decomposition confirms Prophet is capturing the same patterns identified in EDA: a steady upward trend, a weekly cycle peaking on Sundays, and a yearly cycle peaking in summer.

**MAPE: 14.15%** | **RMSE: 8.26**

### Model 3: XGBoost
A single global gradient-boosted tree model trained across all 500 store-item combinations at once, using engineered calendar, lag and rolling-average features along with store and item as categorical inputs.
 
**MAPE: 13.03%** | **RMSE: 7.67**

### Model Comparison

| Model | MAPE | RMSE |
|---|---|---|
| Seasonal Naive Baseline | 23.42% | 14.96 |
| Prophet (all 500 combinations) | 14.15% | 8.26 |
| **XGBoost** | **13.03%** | **7.67** |

XGBoost achieved the best performance on both metrics, improving MAPE by 44% and RMSE by 49% relative to the baseline, and modestly outperforming Prophet on both metrics. This is consistent with the EDA finding that seasonality and item popularity patterns are shared across stores — a single global model with store/item as features can learn from the full dataset at once, rather than fitting 500 independent models as Prophet does.

### Feature Importance Analysis
![Prophet Components](demand-images/feature_im.png)

The 7-day lag and 7-day rolling average dominated feature importance, together accounting for the large majority of the model's predictive power, far outweighing calendar features like month or year and even the 365-day lag. Day of week ranked next, consistent with the weekly seasonality observed in EDA. Store and item ID contributed minimally on their own, since their effect is already captured indirectly through each series' own lag and rolling features.
