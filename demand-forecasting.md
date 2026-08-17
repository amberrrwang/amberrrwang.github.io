---
layout: page
title: "emand Forecasting Challenge"
permalink: /demand-forecasting-challenge/
Built and compared Naive Baseline, Prophet and XGBoost models on 5 years of store-item level retail sales data to forecast future demand. 
tags: [Python, Prophet, XGBoost, Time Series, Feature Engineering, Forecasting]
---

## Abstract
This is a time series demand forecasting project that uses 5 years of historical store-item level retail sales data to predict future demand. The project explores exploratory data analysis, time series decomposition, feature engineering and model comparison to understand what drives sales patterns across different stores and items. In addition to prediction, the analysis examines how trend, seasonality and short-term sales momentum relate to forecasting accuracy. It also demonstrates how forecasting models can support inventory planning and replenishment decisions in a supply chain context.

## Key Question
This project set out to answer three core questions:
1. Which forecasting approach — a naive seasonal baseline, Prophet, or XGBoost — produces the most accurate demand forecasts across 500 store-item combinations?
2. What features drive short-term demand the most: recent sales momentum, calendar effects (day of week, month), or long-term seasonality (same period last year)?
3. Do individual stores and items require separate models, or can a single global model capture shared demand patterns across locations and products?
