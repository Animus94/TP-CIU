import "../styles/googleMap.css";

const GoogleMap = () => {
  return (
    <section className="google-maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6566.895614134912!2d-58.64621389102417!3d-34.618122270721884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1720969724472!5m2!1ses-419!2sar"
        width="800"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
