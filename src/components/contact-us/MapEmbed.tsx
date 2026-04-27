
export default function MapEmbed() {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-border shadow-card h-96 md:h-[500px]">
      <iframe
        title="Maltese Aesthetics Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.2345678901234!2d14.3949!3d35.8989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e5c5c5c5c5c5d%3A0x1234567890abcdef!2sRepublic%20Street%2C%20Valletta%2C%20Malta!5e0!3m2!1sen!2smt!4v1234567890123"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
