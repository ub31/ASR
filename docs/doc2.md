---
id: doc2
title: Introduction & Motivation
sidebar_label: Introduction
custom_edit_url: null
---

Human activity recognition can provide context on the individual’s lifestyle and aid in providing valuable information to the person on their daily intake of food, physical activity, and other required information. It becomes particularly useful for eldercare and health care as a context based assistive technology,  in addition to this, recognizing the activity can help systems to generate personalized recommendations for a user and enrich their experience. Sensor based activity recognition is prevalent and mobile devices like smartphones are one among the ubiquitous technology to monitor the user’s lifestyle. It is estimated that there are 5.23 billion people that have a mobile device in the world amounting to more than 66.79% of the world's population. 
Smartphones have built-in accelerometers which make it capable of recognizing daily activities. This helps to gather an understanding of what people are doing at any moment in time, anticipating what they would probably do next, and providing services automatically and according to the context.

![img](../static/img/intro.png)

There are a couple of challenges that limit the translation of this idea into a product, like Intraclass Variability, Interclass Similarity, Class Imbalance, Ground Truth Annotation.In this project we specifically focus on two major challenges in building an activity recognition model, 
 
First we address the problem of Intraclass variability which implies that same activity can be performed differently by different individuals and even differently by the same individual over time. That means the classifier may have poor performance when it is applied to the test samples gathered from the people different from the training set. One solution to this problem is to collect the necessary data from the individuals beforehand and this could be time-consuming and infeasible.
 
Second we address the problem of sensor placement variations, i.e an activity aware product should be able to recognize the individual’s activity with variations in the placement of sensors as well, since mobile phones can be freely carried around instead of getting strapped to a part of the body like a smart watch, it becomes increasingly difficult to build a recognizer that can account for this variation. Hence an activity recognition method should function independent of the phone's position along the subject's body and should be capable of providing high recognition results even in the absence of adequate amount of training data from different positions.
 
We leverage active and semi-supervised learning methods to solve for the above two problems, first by building a personalized model for an individual, by continually learning from the activities of the individual over time, and second to account for sensor placement variations, we adapt a model trained on data collected from a individual in a particular sensor placement and adapt it to recognize activities when the placement changes. 

