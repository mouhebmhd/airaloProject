import React, { useState } from 'react';
import "../assets/styles/offersStyle.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function LocalEsims() {
  const [countries,setCountries]= useState([
    {
      "slug": "united-states",
      "country_code": "US",
      "title": "United States",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/16291958-0de3-4142-b1ba-d2bb0aeb689c.png"
    }
},
    {
      "slug": "france",
      "country_code": "FR",
      "title": "France",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/37fc7a7b-17e6-45a5-8d29-536de652a317.png"
      }
    },
    {
      "slug": "china",
      "country_code": "CN",
      "title": "China",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/3fd5175a-15fa-4982-b990-b71c33bc729e.png"
    }
},
    {
      "slug": "spain",
      "country_code": "ES",
      "title": "Spain",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/d7dbc915-33ec-4c0b-a324-8d4ccb2e0497.png"
      }
    },
    {
      "slug": "italy",
      "country_code": "IT",
      "title": "Italy",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/473ba88c-547f-447e-970a-d52ba3748077.png"
    }
},
    {
      "slug": "turkey",
      "country_code": "TR",
      "title": "Turkey",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/e41590e5-1299-4eaa-a62b-32e34a40b689.png"
    }
},
    {
      "slug": "united-kingdom",
      "country_code": "GB",
      "title": "United Kingdom",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/f63228a6-7ca3-4393-bf9b-2d134ccded0b.png"
      }
    },
    {
      "slug": "germany",
      "country_code": "DE",
      "title": "Germany",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/d22e42e2-4db3-4923-b01e-342fb8eba2e3.png"
      }
    },
    {
      "slug": "mexico",
      "country_code": "MX",
      "title": "Mexico",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/06292f52-cad7-4975-923d-5bf8a2576556.png"
      }
    },
    {
      "slug": "thailand",
      "country_code": "TH",
      "title": "Thailand",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/e9717288-8ac4-4d26-a5f3-50d0e56c2e11.png"
      }
    },
    {
      "slug": "hong-kong",
      "country_code": "HK",
      "title": "China (Hong Kong)",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/9bc0e2c2-b4ac-4740-af23-e56959a7473c.png"
      }
    },
    {
      "slug": "malaysia",
      "country_code": "MY",
      "title": "Malaysia",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/9ad52c54-3d67-461f-b02a-df65be34b75b.png"
      }
    },
    {
      "slug": "greece",
      "country_code": "GR",
      "title": "Greece",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/f6127d15-7f54-49be-8eeb-3a743d5c2728.png"
      }
    },

    {
      "slug": "canada",
      "country_code": "CA",
      "title": "Canada",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/79413147-5257-4baa-b166-0ab1322ab291.png"
      }
    },

    {
      "slug": "japan",
      "country_code": "JP",
      "title": "Japan",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/5f795c18-e4f8-4803-804c-78dfd5dce34c.png"
      }
    },
    {
      "slug": "singapore",
      "country_code": "SG",
      "title": "Singapore",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/ac5a6754-33dd-42ca-911f-ed481917c91b.png"
      }
    },

    {
      "slug": "aruba",
      "country_code": "AW",
      "title": "Aruba",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/e9c6007c-9f84-4d27-926e-38f6809a01a3.png"
      }
    },

    {
      "slug": "afghanistan",
      "country_code": "AF",
      "title": "Afghanistan",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/d9183037-b7bb-439a-a21f-3f75b07370a8.png"
      }
    },
    {
      "slug": "anguilla",
      "country_code": "AI",
      "title": "Anguilla",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/bea29900-ef25-4669-9a7f-66f2f95c5351.png"
      }
    },

    {
      "slug": "albania",
      "country_code": "AL",
      "title": "Albania",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/c3349c7b-b9e1-4e49-b2ff-43cd24e179b4.png"
      }
    },

    {
      "slug": "united-arab-emirates",
      "country_code": "AE",
      "title": "United Arab Emirates",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/bcdda051-cab1-4891-a8e8-ec55fdede4a9.png"
      }
    },

    {
      "slug": "argentina",
      "country_code": "AR",
      "title": "Argentina",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/daee9182-63a5-4d69-a91e-ef2247693f3b.png"
      }
    },

    {
      "slug": "armenia",
      "country_code": "AM",
      "title": "Armenia",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/aa7a7d4c-b73c-458d-a11b-1cf679d618ee.png"
      }
    },
     
    {
      "slug": "antigua-and-barbuda",
      "country_code": "AG",
      "title": "Antigua And Barbuda",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/7690771c-85a9-4651-80f9-335cc699fd38.png"
      }
    }
  ,
    {
      "slug": "australia",
      "country_code": "AU",
      "title": "Australia",
      "image": {
        "width": 132,
        "height": 99,
        "url": "https://cdn.airalo.com/images/3a6908b6-6387-4f0d-8a62-02eb0440c44d.png"
    }
}
]
)
  return (
    <div className='container-fluid p-3'>
      <h3 className=''>All Countries</h3>
      <div className="row mt-3">
        {
          countries.map((country,index)=>{
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 my-3 col-xs-12  countryContainer">
          <div className="content col-10  d-flex justify-content-between">
            <div className='d-flex align-items-center'>
              <div className="flagContainer"   style={{ backgroundImage: `url(${country.image.url})` }}></div>
            <div className="nameContainer ms-2">
              {country.title}
            </div>
            </div>
            
            <div className="iconContainer">
            <FaArrowRightLong />
            </div>
            
          </div>
        </div> 
            )
          })
        }
        

      </div>
    </div>
  )
}
