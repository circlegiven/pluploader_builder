import {ElementRef, ViewChild} from "@angular/core";
import {Pluploader} from "./domain/pluploader";

declare let plupload;

export class PluploaderDemo {

  @ViewChild('testElement')
  private _testElement: ElementRef;

  public chunk_uploader;

  testInit() {
    this.chunk_uploader = plupload.Uploader(new Pluploader.Builder.UploaderOptionsBuilder()
      .Runtimes('html5')
      .ChunkSize(0)
      .BrowseButton(this._testElement.nativeElement)
      .Url('test.test.test')
      .Headers({
        'Accept': 'application/json, text/plain, */*',
        'Authorization': 'TOKEN'
      })
      .Filters(new Pluploader.Builder.FileFiltersBuilder()
        .MaxFileSize(0)
        .PreventDuplicates(true)
        .builder()
      )
      .init(new Pluploader.Builder.UploaderEventBuilder()
          .PostInit(() => {

          })
          .build()
      )
      .build()
    );
  }
}
