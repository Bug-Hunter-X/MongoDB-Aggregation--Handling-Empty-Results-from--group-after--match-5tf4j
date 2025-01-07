# MongoDB Aggregation: Handling Empty Results

This repository demonstrates a common issue in MongoDB aggregations where the `$group` stage returns an empty result set if no documents match the criteria in the preceding `$match` stage. The code provided showcases this problem and presents a solution to handle empty results gracefully.

## Problem Description

The provided JavaScript code uses the MongoDB aggregation framework to calculate the average age and total count of users in each city. However, if there are no users older than 25 (the condition in the `$match` stage), the aggregation pipeline returns an empty array, making it challenging to differentiate between a genuine lack of matching documents and errors in the query.

## Solution

The solution involves using the `$cond` operator in the `$group` stage. This operator allows for conditional aggregation, enabling the handling of cases where no documents match the `$match` stage. The `$cond` operator returns a default value (such as 0) if no documents are found, thereby providing a more informative result.