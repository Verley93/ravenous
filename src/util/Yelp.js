const apiKey = 'mB97ugz5eqUApLrzSGfSohW0hUcgkQ0D5IOFXi7DBT42un5EjQaOoSU1kn1SOWPfWu9HgE9WNJrYcEf9Hsm6VWME8_CRJmNjtik6Rz50k7er_CZobJwDZ6T9OqBEW3Yx';

const Yelp = {
    search(term, location, sortBy) {
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://api.yelp.com/v3/businesses/search?term=';
        const urlToFetch = `${cors}${url}${term}&location=${location}&sort_by=${sortBy}`;
        const init = {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        };

        return fetch(urlToFetch, init).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;
