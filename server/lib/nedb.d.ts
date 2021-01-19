declare namespace DB {
  interface DatastoreOptions {
    filename?: string
    inMemoryOnly?: boolean
    nodeWebkitAppName?: boolean
    autoload?: boolean
    onload?(error: Error): any
    afterSerialization?(line: string): string
    beforeDeserialization?(line: string): string
    corruptAlertThreshold?: number
    timestampData?: boolean
  }
}
