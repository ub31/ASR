---
id: doc11
title: Appendix
sidebar_label: Appendix 
custom_edit_url: null
---
:::note
**`Here are all the experimental outputs and figures we have run`**
:::

## Experiment 1
### Goal
Identify the improvement in performance over time for a single subject not present in the training dataset using active and semi-supervised learning methods.

#### Training Set

- *Baseline*: Data from all of the subjects except subject `i` to build a baseline model, where the subject `i` is the test subject.
- *Personalization*: Subject `i` data split using a 70:30 split of the dataset. 70% split is taken as unlabeled data from subject `i` and subsets from this would be added to traning set at each round.

#### Test Set
- 30% subset of the data from the subject `i`, which is the golden test data that never be added to the traning data set.

### Figures for comparison of different methods
![img](../static/img/appen_diff_method_1.png) 
![img](../static/img/appen_diff_method_2.png) 
![img](../static/img/appen_diff_method_3.png) 
![img](../static/img/appen_diff_method_4.png) 
![img](../static/img/appen_diff_method_5.png) 
![img](../static/img/appen_diff_method_6.png) 
![img](../static/img/appen_diff_method_7.png) 
![img](../static/img/appen_diff_method_8.png) 
![img](../static/img/appen_diff_method_9.png) 
![img](../static/img/appen_diff_method_10.png) 
![img](../static/img/appen_diff_method_11.png) 
![img](../static/img/appen_diff_method_12.png) 
![img](../static/img/appen_diff_method_13.png) 
![img](../static/img/appen_diff_method_14.png) 

### Figures for comparison of different subjects using a specific method
![img](../static/img/appen_specific_method_diff_subject_1.png) 
![img](../static/img/appen_specific_method_diff_subject_2.png)
![img](../static/img/appen_specific_method_diff_subject_3.png) 
![img](../static/img/appen_specific_method_diff_subject_4.png) 
![img](../static/img/appen_specific_method_diff_subject_5.png)
![img](../static/img/appen_specific_method_diff_subject_6.png) 
![img](../static/img/appen_specific_method_diff_subject_7.png) 
![img](../static/img/appen_specific_method_diff_subject_8.png)
![img](../static/img/appen_specific_method_diff_subject_9.png) 
![img](../static/img/appen_specific_method_diff_subject_10.png) 

### Figures for impact of number of training subjects on personalization
![img](../static/img/appen_diff_number_1.png) 
![img](../static/img/appen_diff_number_2.png) 
![img](../static/img/appen_diff_number_3.png) 
![img](../static/img/appen_diff_number_4.png) 
![img](../static/img/appen_diff_number_5.png) 
![img](../static/img/appen_diff_number_6.png) 
![img](../static/img/appen_diff_number_7.png) 
![img](../static/img/appen_diff_number_8.png) 
![img](../static/img/appen_diff_number_9.png) 
![img](../static/img/appen_diff_number_10.png) 
![img](../static/img/appen_diff_number_11.png) 
![img](../static/img/appen_diff_number_12.png) 
![img](../static/img/appen_diff_number_13.png) 
![img](../static/img/appen_diff_number_14.png) 
![img](../static/img/appen_diff_number_15.png) 
![img](../static/img/appen_diff_number_16.png) 
![img](../static/img/appen_diff_number_17.png) 
![img](../static/img/appen_diff_number_18.png) 
![img](../static/img/appen_diff_number_19.png) 
![img](../static/img/appen_diff_number_20.png) 
![img](../static/img/appen_diff_number_21.png) 
![img](../static/img/appen_diff_number_22.png) 
![img](../static/img/appen_diff_number_23.png) 
![img](../static/img/appen_diff_number_24.png) 
![img](../static/img/appen_diff_number_25.png) 
![img](../static/img/appen_diff_number_26.png) 
![img](../static/img/appen_diff_number_27.png) 
![img](../static/img/appen_diff_number_28.png) 


## Experiment 2
Subject `i` hand and pocket data split using a 70:30 split of the dataset

### Goal
Identify how can a classifier be adapted to account for sensor placement variations for a single individual subject

#### Training Set
- *Baseline*: 70% Hand data of a specific subject `i` 
- *Adaptation*: subsets from 70% pocket data of a specific subject `i`

#### Test Set
- 30% subsets of hand data and pocket data of a specific subject `i`

### Figures for comparson of different placements
![img](../static/img/appen_diff_sensor_1.png) 
![img](../static/img/appen_diff_sensor_2.png)
![img](../static/img/appen_diff_sensor_3.png) 
![img](../static/img/appen_diff_sensor_4.png) 
![img](../static/img/appen_diff_sensor_5.png) 
![img](../static/img/appen_diff_sensor_6.png) 
![img](../static/img/appen_diff_sensor_7.png) 
![img](../static/img/appen_diff_sensor_8.png) 
![img](../static/img/appen_diff_sensor_9.png) 
![img](../static/img/appen_diff_sensor_10.png) 
![img](../static/img/appen_diff_sensor_11.png) 
![img](../static/img/appen_diff_sensor_12.png) 
![img](../static/img/appen_diff_sensor_13.png) 
![img](../static/img/appen_diff_sensor_14.png) 
![img](../static/img/appen_diff_sensor_15.png) 
![img](../static/img/appen_diff_sensor_16.png)  
