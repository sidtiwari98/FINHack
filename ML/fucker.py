import os
import sys
import pandas as pd

import joblib
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import Ridge

reg = joblib.load('ridge.pkl')
to_pred = pd.DataFrame.from_dict([{"age": int(sys.argv[1]), "bmi": float(sys.argv[2]), "children": int(sys.argv[3]), "female": int(sys.argv[4]),
                                    "male": int(sys.argv[5]), "smoke_no": int(sys.argv[6]), "smoke_yes": int(sys.argv[7])}], orient='columns')
print(float(reg.predict(to_pred)))
