export const settingsInitState = {
  isLoaded: false,
  isLoading: false,
  error: false,
  data: {
    fields_to_show_on_list: {
      customFields: [],

      optionalFields: {
        expiration_date: false,
        gsm_operator: false,
        magnetic_stripe_width: false,
        material_type: false,
        nr_of_pulses: false,
        number_printype: false,
        number_type: false,
        prefix: false,
        price: false,
        printed_amount: false,
        producer: false,
        production_date: false,
        publisher: false,
        series: false,
        shape: false,
        surface_type: false,
        chip_type: false,
      },
    },
  },
};
