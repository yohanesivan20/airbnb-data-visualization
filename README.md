# Airbnb Data Analysis & Dashboard

An exploratory data analysis project using Airbnb listing data to uncover patterns in pricing, room types, and neighbourhood distribution.

The project combines **Python-based data analysis** with an interactive **React dashboard** to make the results easier to explore and understand.

## Project Overview

This project analyzes Airbnb listing data containing information about properties, hosts, locations, room types, prices, reviews, and availability.

The analysis focuses on several questions:

* How are Airbnb prices distributed?
* How are listings distributed across different room types?
* Which neighbourhoods have the most listings?
* What patterns can be observed from the available listing data?

The goal is to turn raw Airbnb data into meaningful insights and present the findings in a simple and accessible dashboard.

## Tech Stack

### Data Analysis

* Python
* Pandas
* Matplotlib
* Jupyter Notebook

### Dashboard

* React
* JavaScript
* CSS

## Project Structure

```text
airbnb-data-visualization/
│
├── data-analysis/
├── dashboard/
└── README.md
```

## Analysis

### 1. Price Distribution

The first analysis explores the distribution of Airbnb listing prices.

This helps identify the general price range of listings and understand how prices are distributed across the dataset.

### 2. Room Type Distribution

The dataset contains several room types, such as:

* Entire home/apt
* Private room
* Shared room
* Hotel room

The analysis compares the number of listings for each room type to understand which accommodation types are most common.

### 3. Neighbourhood Distribution

The analysis also examines the number of Airbnb listings across different neighbourhoods.

This provides an overview of where Airbnb properties are concentrated within the dataset.

## Dashboard

The analysis results are presented through a React dashboard containing:

* Overview metrics
* Price distribution
* Room type distribution
* Neighbourhood distribution

The dashboard is designed to provide a quick overview of the dataset without requiring users to read the original notebook.

### Live Dashboard

**[View Live Dashboard](https://airbnb-data-visualization-dashboard.vercel.app/)**

## Dataset

The project uses the **Airbnb Open Data** dataset.

The dataset contains information including:

* Listing information
* Host information
* Neighbourhood
* Latitude and longitude
* Room type
* Price
* Minimum nights
* Number of reviews
* Reviews per month
* Availability

## Data Preparation

Before performing the analysis, the dataset was inspected and cleaned to improve data quality.

The preparation process included:

* Checking dataset dimensions
* Inspecting missing values
* Reviewing data types
* Cleaning inconsistent neighbourhood names
* Examining price values
* Creating additional features for analysis
* Preparing aggregated data for visualization

## Key Takeaways

The analysis provides several useful observations about the Airbnb listings in the dataset:

* Airbnb prices have a wide distribution with a concentration in lower-to-mid price ranges.
* Entire homes/apartments represent a significant portion of the available listings.
* Airbnb listings are not evenly distributed across neighbourhoods.
* Different neighbourhoods show different listing concentrations and pricing patterns.

The dashboard makes these patterns easier to explore visually.

## What I Learned

Through this project, I practiced the end-to-end workflow of a basic data analysis project:

1. Understanding the dataset
2. Cleaning and preparing data
3. Exploring data with Pandas
4. Performing basic statistical analysis
5. Creating visualizations with Matplotlib
6. Extracting insights from the analysis
7. Preparing analysis results for a dashboard
8. Building a simple React data visualization dashboard

## Future Improvements

Possible improvements for the next version include:

* Adding more statistical analysis
* Analyzing the relationship between price and neighbourhood
* Exploring review activity and availability
* Adding interactive filters to the dashboard
* Adding geographical visualization using latitude and longitude
* Building additional KPIs for hosts and listings

## Author

**Ivan Danasuta**

Software Developer | Aspiring Data Analyst

* GitHub: [@yohanesivan20](https://github.com/yohanesivan20)
* Portfolio: [Portfolio Website](https://portfolio-van-v2.vercel.app/)
