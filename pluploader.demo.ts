import {PluploaderOptions} from "./pluploader.options";
import {ElementRef, ViewChild} from "@angular/core";
import {PluploaderMethod} from "./pluploader.method";

declare let pluploader;

export class PluploaderDemo {

  @ViewChild('testElement')
  private _testElement: ElementRef;

  public chunk_uploader;

  testInit() {
    this.chunk_uploader = pluploader.Uploader(new PluploaderOptions.OptionsBuilder()
      .Runtimes('html5')
      .ChunkSize(0)
      .BrowseButton(this._testElement.nativeElement)
      .Url('test.test.test')
      .Headers({
        'Accept': 'application/json, text/plain, */*',
        'Authorization': 'TOKEN'
      })
      .Filters(new PluploaderOptions.FileFiltersBuilder()
        .MaxFileSize(0)
        .PreventDuplicates(true)
        .builder()
      )
      .init(new PluploaderMethod.MethodBuilder()
          .PostInit(() => {

          })
          .build()
      )
      .build()
    );
  }
}
