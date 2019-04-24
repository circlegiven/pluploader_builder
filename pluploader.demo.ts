import {ElementRef, ViewChild} from "@angular/core";
import {Pluploader} from "./pluploader";


declare let pluploader;

export class PluploaderDemo {

  @ViewChild('testElement')
  private _testElement: ElementRef;

  public chunk_uploader;

  testInit() {
    this.chunk_uploader = pluploader.Uploader(new Pluploader.Uploader.Setting.OptionsBuilder()
      .Runtimes('html5')
      .ChunkSize(0)
      .BrowseButton(this._testElement.nativeElement)
      .Url('test.test.test')
      .Headers({
        'Accept': 'application/json, text/plain, */*',
        'Authorization': 'TOKEN'
      })
      .Filters(new Pluploader.Uploader.Setting.FileFiltersBuilder()
        .MaxFileSize(0)
        .PreventDuplicates(true)
        .builder()
      )
      .init(new Pluploader.Uploader.EventBuilder()
          .PostInit(() => {

          })
          .build()
      )
      .build()
    );
  }
}
