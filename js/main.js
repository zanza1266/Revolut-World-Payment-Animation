
const vm = new Vue ({
  el: '#root',
  data: {
    cities: [
      {
        name: 'new-york',
        toggle: false
      },
      {
        name: 'rome',
        toggle: false
      },
      {
        name: 'tokyo',
        toggle: false
      },
      {
        name: 'cairo',
        toggle: false
      },
      {
        name: 'mosca',
        toggle: false
      },
      {
        name: 'sidney',
        toggle: false
      },
      {
        name: 'londra',
        toggle: false
      },
      {
        name: 'parigi',
        toggle: false
      },
      {
        name: 'boston',
        toggle: false
      },
      {
        name: 'san-paolo',
        toggle: false
      },
      {
        name: 'pechino',
        toggle: false
      },
      {
        name: 'tangeri',
        toggle: false
      },
      {
        name: 'madrid',
        toggle: false
      },
      {
        name: 'lisbona',
        toggle: false
      },
      {
        name: 'nairobi',
        toggle: false
      },
      {
        name: 'monterray',
        toggle: false
      },
      {
        name: 'bogotà',
        toggle: false
      },
      
    ],
    random: []

  },
  mounted () {
    for (let i = 0; i < this.cities.length; i++) {
      let ran = numberBetween(1, 1000);
      this.random.push(ran)
    }
    this.myFunc();
    setInterval(this.myFunc, 7000)
    

  },
  methods: {
    myFunc: function () {
      // console.log(this);
      for (let i = 0; i < this.cities.length; i++) {
        let num = numberBetween(0, 5000);
        console.log(num);

        this.timeOut(num, i, this.cities);


      }
    },

    timeOut: function (int, iterationNum, arr) {
      // console.log(arr);
      setTimeout(function () {
        console.log(arr[iterationNum].name);

        arr[iterationNum].toggle = true;

      }, int)

      setTimeout(function () {
        arr[iterationNum].toggle = false;
      }, int + 1700)
    }

  }
})
