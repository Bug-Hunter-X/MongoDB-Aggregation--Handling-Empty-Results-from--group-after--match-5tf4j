```javascript
db.users.aggregate([
  {
    $match: {
      age: {
        $gt: 25
      }
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: {
        $avg: "$age"
      },
      totalUsers: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      _id: 1,
      averageAge: {
        $cond: {
          if: {
            $eq: ["$totalUsers", 0]
          },
          then: 0,
          else: "$averageAge"
        }
      },
      totalUsers: 1
    }
  }
]);
```