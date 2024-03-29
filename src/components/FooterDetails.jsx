function FooterDetails() {
  return (
    <div className="lg:col-span-2 flex justify-between mt-6">
      <div>
        <h6 className="font-medium text-gray-400">Solutions</h6>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Insights</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Support</h6>
        <ul>
          <li className="py-2 text-sm">Pricing</li>
          <li className="py-2 text-sm">Documentation</li>
          <li className="py-2 text-sm">Guides</li>
          <li className="py-2 text-sm">API Status</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Company</h6>
        <ul>
          <li className="py-2 text-sm">About</li>
          <li className="py-2 text-sm">Blog</li>
          <li className="py-2 text-sm">Jobs</li>
          <li className="py-2 text-sm">Press</li>
          <li className="py-2 text-sm">Careers</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Legal</h6>
        <ul>
          <li className="py-2 text-sm">Claim</li>
          <li className="py-2 text-sm">Policy</li>
          <li className="py-2 text-sm">Terms</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterDetails;
