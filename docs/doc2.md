---
id: doc2
title: Introduction
sidebar_label: Introduction
custom_edit_url: null
slug: /
---

### Background 
**Human activity recognition** can provide context on the individual’s lifestyle and aid in providing valuable information to the user on their daily intake of food, physical activity, and metabolism. It becomes particularly useful for eldercare and health care as a monitoring technology,  in addition to this, recognizing the activity can help systems to generate personalized recommendations for a user and enrich their experience. **Sensor based activity recognition** is prevalent and mobile devices like **smartphones** are one among the ubiquitous technology to monitor the user’s lifestyle. It is estimated that there are **5.23 billion** people that have a mobile device in the world amounting to more than **66.79%** of the world's population. Smartphones have built-in **accelerometers** which make it capable of recognizing daily activities. This helps to gather an understanding of what people are doing at any moment in time, anticipating what they would probably do next, and providing services automatically and according to the context.

![img](../static/img/intro.png)

### Motivation 

There are some challenges that limit the translation of the idea into a product, like `intraclass variability`, `interclass similarity`, `class imbalance`, `ground truth annotation`. In this project we specifically focus on two of these major challenges in building an activity recognition model, 
 

First we address the problem of **intraclass variability** which implies that same activity can be performed differently by different individuals and even differently by the same individual over time. That means the classifier may have poor performance when it is applied to the test samples gathered from the users different from the those in training. One solution to this problem is to collect the necessary data from each user beforehand but this could be time-consuming and not feasible.
 
Second we address the problem of **sensor placement variations**, i.e an activity aware product should be able to recognize the individual’s activity with variations in the placement of sensors as well, since mobile phones can be freely carried around instead of getting strapped to a part of the body like a smart watch, it becomes increasingly difficult to build a recognizer that can account for this variation. Hence an activity recognition method should function independent of the phone's position along the subject's body and should be capable of providing high recognition results even in the absence of adequate amount of training data from different positions.
 
We leverage active and semi-supervised learning methods and aim to solve the above two problems by, 
* Building a personalized model for an individual, to continually learn from the activities of the individual over time.
* Adapting a model trained on data collected from a individual in a particular sensor placement to recognize activities when the placement changes. 

