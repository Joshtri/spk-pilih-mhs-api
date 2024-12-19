export interface Response<T> {
  status: string;    // Status response, seperti "success" atau "error"
  message: string;   // Pesan response
  data?: T;          // Data yang dikembalikan jika ada
  error?: string;    // Error message jika terjadi error
}
