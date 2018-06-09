
document.getElementById('getText').addEventListener('click', getText);

  function getText() {
    fetch('sample.json')
    .then(function(res) {
      // return res.text();
      console.log(res);
    })
    // .then(function(data) {
    //   console.log(data);
    // });
  }
