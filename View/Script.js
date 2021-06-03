export default {
    data() {
      return {
        links: [],
        state: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return ((link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0) 
          || (link.Name.toLowerCase().indexOf(queryString.toLowerCase()) === 0) 
          || (link.Id.toLowerCase().indexOf(queryString.toLowerCase()) === 0) );
        };
      },
      loadAll() {
        return [
          { "value": "vue", "Name": "Augusto", "Id":"1" },
          { "value": "element", "Name": "Niko ", "Id":"2" },
          { "value": "cooking", "Name": "Seba", "Id":"3" },
          { "value": "mint-ui", "Name": "juan ", "Id":"4" },
          { "value": "vuex", "Name": "Roo", "Id":"5" },
          { "value": "vue-router", "Name": "Javier", "Id":"6" },
          { "value": "babel", "Name": "Zulema", "Id":"7" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }