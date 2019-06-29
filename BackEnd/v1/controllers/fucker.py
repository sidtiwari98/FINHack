import os
import sys
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.linear_model import Ridge


data = pd.read_csv("insurance.csv", usecols=["age", "sex", "bmi", "children", "smoker", "charges"])
data['smoker'] = data['smoker'].replace(to_replace = "yes", value = 1)
data['smoker'] = data['smoker'].replace(to_replace = "no", value = 0)
data['sex'] = data['sex'].replace("male", value = 1)
data['sex'] = data['sex'].replace("female", value = 0)
data = data.join(pd.get_dummies(data['sex']))
data.columns = ["age","sex", "bmi", "children", "smoker", "charges", "female", "male"]
data = data.join(pd.get_dummies(data['smoker']))
data.columns = ["age","sex", "bmi", "children", "smoker", "charges", "female", "male", "smoke_no", "smoke_yes"]
data = data.drop(["sex", "smoker"], axis = 1)
data["charges_q"] = pd.qcut(data["charges"], 5, labels=False)+1

X = data.drop(["charges", "charges_q"], axis=1)
y = data["charges_q"]
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42, test_size=0.3)
reg = Ridge()
reg.fit(X_train, y_train)
to_pred = pd.DataFrame.from_dict([{"age": int(sys.argv[1]), "bmi": float(sys.argv[2]), "children": int(sys.argv[3]), "female": int(sys.argv[4]),
                                    "male": int(sys.argv[5]), "smoke_no": int(sys.argv[6]), "smoke_yes": int(sys.argv[7])}], orient='columns')
print(float(reg.predict(to_pred)))
