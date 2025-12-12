```sh
## Error Type
Recoverable Error

## Error Message
Hydration failed because the server rendered text didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <RenderFromTemplateContext>
      <ScrollAndFocusHandler segmentPath={[...]}>
        <InnerScrollAndFocusHandler segmentPath={[...]} focusAndScrollRef={{apply:false, ...}}>
          <ErrorBoundary errorComponent={undefined} errorStyles={undefined} errorScripts={undefined}>
            <LoadingBoundary name="/" loading={null}>
              <HTTPAccessFallbackBoundary notFound={<SegmentViewNode>} forbidden={undefined} unauthorized={undefined}>
                <HTTPAccessFallbackErrorBoundary pathname="/ar/home" notFound={<SegmentViewNode>} forbidden={undefined} ...>
                  <RedirectBoundary>
                    <RedirectErrorBoundary router={{...}}>
                      <InnerLayoutRouter url="/ar/home" tree={[...]} params={{locale:"ar"}} ...>
                        <SegmentViewNode type="layout" pagePath="[locale]/l...">
                          <SegmentTrieNode>
                          <link>
                          <script>
                          <script>
                          <LocaleLayout>
                            <html
                              lang="en"
-                             className="translated-ltr"
                            >
                              ...
                                <div className="flex items...">
                                  <img>
                                  <nav className="flex items...">
                                    <Button variant="secondary" className="btn-transp...">
                                      <button
                                        data-slot="button"
                                        className={"inline-flex items-center justify-center gap-2 whitespace-nowrap r..."}
                                      >
+                                       بيت
-                                       house
                                    ...
                      ...
          ...



    at button (<anonymous>:null:null)
    at undefined.Home (app/[locale]/home/page.tsx:6:7)

## Code Frame
  4 |   return (
  5 |     <div>
> 6 |       <Header/>
    |       ^
  7 |     </div>
  8 |   );
  9 | }

Next.js version: 16.0.10 (Turbopack)

```

