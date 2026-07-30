export default function AppButtons({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="https://play.google.com/store/apps/details?id=com.app.rides234"
        className="transition-transform hover:-translate-y-0.5"
      >
        <img src="/images/googleplay.png" alt="Get it on Google Play" className="h-12 w-auto" />
      </a>
      <a
        href="https://apps.apple.com/us/app/234-rides-limited/id6639612285"
        className="transition-transform hover:-translate-y-0.5"
      >
        <img src="/images/appstorebtn.png" alt="Download on the App Store" className="h-12 w-auto" />
      </a>
    </div>
  );
}
