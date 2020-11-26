import { extend } from "vee-validate";
import { email, max, min, numeric, required } from "vee-validate/dist/rules";

extend("empty", {
  ...required,
  message: field => field + " tidak boleh kosong"
});

extend("email", {
  ...email,
  message: "Format alamat email tidak sesuai"
});

extend("numeric", {
  ...numeric,
  message: "Hanya bisa diisi dengan angka"
})

extend("min_generic_name", {
  ...min,
  message: (field, { length }) => `Minimal ${length} karakter`
});

extend("min_phone_number", {
  ...min,
  message: "Minimal 10 angka"
});

extend("max_age", {
  ...max,
  message: "Maksimal 2 digit"
})