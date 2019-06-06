const apiKey = 'Dp_--9VdE82NXnpW7C328IIJ1I7zR5qXWAihNJ00tvwykGbKw8xqtj4mH6a6HBtRfH85aBhTXcYoQhur_vr5APhkqy6a5hD8zDLo__c_2_iWu_WAU04pgGEmrKq1XHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers: {Authorization: `Bearer ${apiKey}`}}
    ).then(response => {
      return response.json();
    }).then((jsonResponse) => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.adress,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.category,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        });
      }
    })
  }
};

export default Yelp;
