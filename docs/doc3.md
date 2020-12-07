---
id: doc3
title: Related Work & Our Goals
sidebar_label: Related Work & Goals
custom_edit_url: null
---

In the paper [**“Improving Activity Classification for Health Applications on Mobile Devices using Active and Semi-Supervised Learning“ by Brent et. al.**](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.176.4918&rep=rep1&type=pdf) , the authors compared the performance improvement of active learning and three different semi-supervised learning methods about automatically adapting classifiers. However, this paper did not further investigate the effect of these augmented classifiers on the test set where the user’s way of performing activities differs from how it was performed in the training data set.
 
In the paper, [**A Tutorial on Human Activity Recognition Using Body-Worn Inertial Sensors by Andreas et. al.**](https://dl.acm.org/doi/10.1145/2499621) the authors discuss a case study on the influence of sensor placement on the recognition performance, using sensors strapped to different positions on hand and did not deal with mobile phone sensors. 

Recently, in the paper [**Human Activity Recognition Based on Dynamic Active Learning by Haixia et. al.**](https://ieeexplore-ieee-org.ezproxy.lib.utexas.edu/stamp/stamp.jsp?tp=&arnumber=9153742&tag=1), the authors present a method that focuses on activity learning with new activity discovery while they did not actually conduct the performance evaluation in the scenario where training data set and test data set come from different participants.


The major goal of this project is twofold. They are :

1. We aim to identify the percentage improvement in performance of an activity recognition model over time for a single subject not present in the training dataset using active and semi-supervised learning methods.(`subject-independent`)
2. We aim to identify how much can a classifier be adapted to account for sensor placement variations for a single individual subject.(`subject-dependent`)