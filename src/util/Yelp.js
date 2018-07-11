const apiKey = 'mB97ugz5eqUApLrzSGfSohW0hUcgkQ0D5IOFXi7DBT42un5EjQaOoSU1kn1SOWPfWu9HgE9WNJrYcEf9Hsm6VWME8_CRJmNjtik6Rz50k7er_CZobJwDZ6T9OqBEW3Yx';
const clientID = SGKVMzGBg9sUSctUNeoa_w;

const Yelp = {
    search(term, location, sortBy) {
        const url = 'https://api.yelp.com/v3/businesses/search?';
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const urlToFetch = `${cors}${url}term=${term}&location={location}&sort_by=${sortBy}`;
        const init = {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        };

        return fetch(urlToFetch, init).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                jsonResponse.business.map(business => {
                    const listing = {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: busines.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                    return listing;
                });
            }
        });
    }
}

export default Yelp;
