import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useJsApiLoader ({
    id: "AIzaSyBwZIHTwjOEb62DXwjnuKziwBwWvK7AM3U",
    googleMapsApiKey: "AIzaSyBwZIHTwjOEb62DXwjnuKziwBwWvK7AM3U",
  });
  const containerStyle ={
    width: "300px",
    height: "200px",
    border: "0",
  };
  const center = {
    lat: 34.08353051668544,
    lng: -118.21799911349397,
  }

  return isLoaded && (
    <>
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        
      >
      </GoogleMap>
    </>
    

  )
};

export default Map;