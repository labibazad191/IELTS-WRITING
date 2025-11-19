# TODO for Solving 4.ipynb

1. Modify the code to loop over all columns in y.columns.
2. For each column, if column == 'score', use SVR with regression param_grid; else, use SVC with classification param_grid.
3. Perform GridSearchCV, fit on X_train, y_train[column].
4. Print best params and report (classification_report for SVC, regression metrics for SVR).
5. Save the best model as f"{column}_svm_model_Coherence_and_Cohesion.pkl".
6. For prediction section, load all models, predict for each column, and print results.
7. Test the notebook by running it.
