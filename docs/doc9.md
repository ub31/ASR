---
id: doc9
title: Conclusion & Contribution
sidebar_label: Conclusion & Contribution
custom_edit_url: null
---

In this project, we leverage **active and semi-supervised learning methods** to prove the feasibility of the personalization of a classifier and to observe the degree of improvement with respect to the variation of sensor placements and individual differences. For example, we can achieve 70%-80% accuracy using active learning with the least confidence if 20% of unlabeled data (500 out of 2500 samples) are labeled and added into the training set. That is a huge improvement compared to the baseline classifier that only had less than 20% accuracy.

In experiment 1,  we train our baseline models using the RandomForest classifier for hand and pocket data using LOSO. Then we compare the performance of various query methods of active learning and semi-supervised learning. In our experimental result, **active learning with the least confidence method has the best performance** while the mix of active and semi-supervised learning has the worst one. The reason could be that the performance of the baseline classifier is so poor that the **semi-supervised learning labels many instances incorrectly**.

Moreover, we study the impact of the number of training subjects on the performance: As expected, the performance becomes worse with more training subjects used to build the baseline classifier, which implies it is more difficult to personalize the model as more other people’s activity patterns are considered in the training model. There is a tradeoff between baseline performance and personalization.

In experiment 2, we further discover how can a classifier be adapted to account for sensor placement variations for a single individual subject. We observe that the performance of placement on hand remains stably high as more unlabeled data of placement on pocket is annotated to labeled data and added to the training set. Eventually, it reaches good performance for both placements. The result indicates that we can **adapt a classifier with active learning** to get a good performance of activity recognition even if the placement of the test set is different than that of the baseline training data set.
