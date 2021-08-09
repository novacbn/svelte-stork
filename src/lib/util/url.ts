export function is_internal_url(uri: string, origin: string = location.origin): boolean {
    return new URL(uri, "http://fake.example").origin === origin;
}
