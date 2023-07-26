
const express = require('express');
const app = express();
app.get('/numbers', (req, res) => {
  const { url } = req.query;

  if (!url || !Array.isArray(url)) {
    return res.status(400).json({ error: 'Invalid or missing "url" parameter.' });
  }

  const values = url.map((u) => u.split('/').pop());
  let result = [];
  const end=30;
  for (let i = 0; i < values.length; i++) {
    if (values[i]==="prime") { 
      for (let j = 1; j <= end; j++) { 
        let count = 0;
        for (let m = 2; m < j; m++) {
          if (j % m == 0) {
            count++;
          }
        }
        if (count == 0) {
          result.push(j);
        }
      }
    } else if (values[i] === "odd") {
      for (let j = 1; j <= end; j++) {
        if (j % 2 == 1) {
          result.push(j);
        }
      }
    } else if (values[i] === "even") {
      for (let j = 1; j <= end; j++) {
        if (j % 2 == 0) {
          result.push(j);
        }
      }
    }
    else if(values[i]==="rand")
    {
        let rand= Math.floor(Math.random() * (100 - 1)) + 1;
        result.push(rand);
    }
    else if(values[i]==="fibo")
    {
        let a=0;
        let b=1;
        while(1)
        {
            let c=a+b;
            if(c>end)
            {
                break;
            }
            else
            {
                result.push(c);
            }
            a=b;
            b=c;
        }
    }
  }
  const set = new Set(result);
  const arr = Array.from(set);
  const results = arr.sort((a, b) => a - b); 
  console.log(results);
  res.json({
    number: results
  });
})

const port = 3500;
app.listen(port, () => {
  console.log(`Server  running on  http://localhost:${port}`);
});