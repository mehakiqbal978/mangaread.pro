export default function AadsBanner() {
  return (
    <div id="frame" style={{ width: "100%", margin: "0 auto 20px auto", position: "relative", zIndex: 99998, paddingTop: "10px" }}>
      <iframe 
        data-aa='2455860' 
        src='//acceptable.a-ads.com/2455860/?size=Adaptive&background_color=transparent'
        style={{ border: 0, padding: 0, width: "70%", height: "auto", overflow: "hidden", display: "block", margin: "auto" }}
      ></iframe>
      <div style={{ width: "70%", margin: "auto", position: "absolute", left: 0, right: 0 }}>
        <a 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: "inline-block", fontSize: "13px", color: "#263238", padding: "4px 10px", background: "#F8F8F9", textDecoration: "none", borderRadius: "0 0 4px 4px" }} 
          id="frame-link" 
          href="https://aads.com/campaigns/new/?source_id=2455860&source_type=ad_unit&partner=2455860"
        >
          Advertise here
        </a>
      </div>
    </div>
  );
}
