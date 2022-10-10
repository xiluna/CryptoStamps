const testdata = {
  id: "shp_...",
  object: "Shipment",
  mode: "test",
  to_address: {
    id: "adr_...",
    object: "Address",
    name: "Dr. Steve Brule",
    company: null,
    street1: "179 N Harbor Dr",
    street2: null,
    city: "Redondo Beach",
    state: "CA",
    zip: "90277",
    country: "US",
    phone: "4153334444",
    mode: "test",
    carrier_facility: null,
    residential: null,
    email: "dr_steve_brule@gmail.com",
    created_at: "2013-04-22T05:39:56Z",
    updated_at: "2013-04-22T05:39:56Z",
  },
  from_address: {
    id: "adr_...",
    object: "Address",
    name: "EasyPost",
    company: null,
    street1: "417 Montgomery Street",
    street2: "5th Floor",
    city: "San Francisco",
    state: "CA",
    zip: "94104",
    country: "US",
    phone: "4153334444",
    email: "support@easypost.com",
    mode: "test",
    carrier_facility: null,
    residential: null,
    created_at: "2013-04-22T05:39:57Z",
    updated_at: "2013-04-22T05:39:57Z",
  },
  parcel: {
    id: "prcl_...",
    object: "Parcel",
    length: 20.2,
    width: 10.9,
    height: 5.0,
    predefined_package: null,
    weight: 140.8,
    created_at: "2013-04-22T05:39:57Z",
    updated_at: "2013-04-22T05:39:57Z",
  },
  customs_info: {
    id: "cstinfo_...",
    object: "CustomsInfo",
    created_at: "2013-04-22T05:39:57Z",
    updated_at: "2013-04-22T05:39:57Z",
    contents_explanation: null,
    contents_type: "merchandise",
    customs_certify: false,
    customs_signer: null,
    eel_pfc: null,
    non_delivery_option: "return",
    restriction_comments: null,
    restriction_type: "none",
    customs_items: [
      {
        id: "cstitem_...",
        object: "CustomsItem",
        description: "Many, many EasyPost stickers.",
        hs_tariff_number: "123456",
        origin_country: "US",
        quantity: 1,
        value: 879,
        weight: 140,
        created_at: "2013-04-22T05:39:57Z",
        updated_at: "2013-04-22T05:39:57Z",
      },
    ],
  },
  rates: [
    {
      id: "rate_...",
      object: "Rate",
      billing_type: "easypost",
      carrier_account_id: "ca_...",
      service: "FirstClassPackageInternationalService",
      rate: "9.50",
      carrier: "USPS",
      shipment_id: "shp_...",
      delivery_days: 4,
      delivery_date: "2013-04-26T05:40:57Z",
      delivery_date_guaranteed: false,
      created_at: "2013-04-22T05:40:57Z",
      updated_at: "2013-04-22T05:40:57Z",
    },
    {
      id: "rate_...",
      object: "Rate",
      billing_type: "easypost",
      carrier_account_id: "ca_...",
      service: "PriorityMailInternational",
      rate: "27.40",
      carrier: "USPS",
      shipment_id: "shp_...",
      delivery_days: 2,
      delivery_date: "2013-04-24T05:40:57Z",
      delivery_date_guaranteed: false,
      created_at: "2013-04-22T05:40:57Z",
      updated_at: "2013-04-22T05:40:57Z",
    },
    {
      id: "rate_...",
      object: "Rate",
      billing_type: "easypost",
      carrier_account_id: "ca_...",
      service: "ExpressMailInternational",
      rate: "35.48",
      carrier: "USPS",
      shipment_id: "shp_...",
      delivery_days: 1,
      delivery_date: "2013-04-23T05:40:57Z",
      delivery_date_guaranteed: true,
      created_at: "2013-04-22T05:40:57Z",
      updated_at: "2013-04-22T05:40:57Z",
    },
  ],
  scan_form: null,
  selected_rate: null,
  postage_label: null,
  tracking_code: null,
  refund_status: null,
  insurance: null,
  created_at: "2013-04-22T05:40:57Z",
  updated_at: "2013-04-22T05:40:57Z",
};

export default testdata;
