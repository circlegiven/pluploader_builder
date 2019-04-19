export namespace PluploaderMethod {
    export class MethodBuilder {
        private _init: Function;
        private _postInit: Function;
        private _optionChanged: Function;
        private _refresh: Function;
        private _stateChanged: Function;
        private _browse: Function;
        private _fileFiltered: Function;
        private _queueChanged: Function;
        private _filesAdded: Function;
        private _filesRemoved: Function;
        private _beforeUpload: Function;
        private _uploadFile: Function;
        private _uploadProgress: Function;
        private _beforeChunkUpload: Function;
        private _chunkUploaded: Function;
        private _fileUploaded: Function;
        private _uploadComplete: Function;
        private _error: Function;
        private _destroy: Function;

        PostInit(callback: Function) {
            this._postInit = callback;
            return this;
        }
        get postInit() {
            return this._postInit;
        }

        FilesAdded(callback: Function) {
            this._filesAdded = callback;
            return this;
        }
        get filesAdded() {
            return this._filesAdded;
        }

        UploadProgress(callback: Function) {
            this._uploadProgress = callback;
            return this;
        }
        get uploadProgress() {
            return this._uploadProgress;
        }

        BeforeUpload(callback: Function) {
            this._beforeUpload = callback;
            return this;
        }
        get beforeUpload() {
            return this._beforeUpload;
        }

        UploadFile(callback: Function) {
            this._uploadFile = callback;
            return this;
        }
        get uploadFile() {
            return this._uploadFile;
        }

        FileUploaded(callback: Function) {
            this._fileUploaded = callback;
            return this;
        }
        get fileUploaded() {
            return this._fileUploaded;
        }

        BeforeChunkUpload(callback: Function) {
            this._beforeChunkUpload = callback;
            return this;
        }
        get beforeChunkUpload() {
            return this._beforeChunkUpload;
        }

        ChunkUploaded(callback: Function) {
            this._chunkUploaded = callback;
            return this;
        }
        get chunkUploaded() {
            return this._chunkUploaded;
        }

        UploadComplete(callback: Function) {
            this._uploadComplete = callback;
            return this;
        }
        get uploadComplete() {
            return this._uploadComplete;
        }

        Error(callback: Function) {
            this._postInit = callback;
            return this;
        }
        get error() {
            return this._postInit;
        }

        build() {
            return new Method(this);
        }
    }

    export class Method {
        private Init: Function;
        private PostInit: Function;
        private OptionChanged: Function;
        private Refresh: Function;
        private StateChanged: Function;
        private Browse: Function;
        private FileFiltered: Function;
        private QueueChanged: Function;
        private FilesAdded: Function;
        private FilesRemoved: Function;
        private BeforeUpload: Function;
        private UploadFile: Function;
        private UploadProgress: Function;
        private BeforeChunkUpload: Function;
        private ChunkUploaded: Function;
        private FileUploaded: Function;
        private UploadComplete: Function;
        private Error: Function;
        private Destroy: Function;

        constructor(builder: MethodBuilder) {
            if (!_.isNil(builder.postInit)) {
                this.PostInit = builder.postInit;
            }
            if (!_.isNil(builder.filesAdded)) {
                this.FilesAdded = builder.filesAdded;
            }
            if (!_.isNil(builder.uploadProgress)) {
                this.UploadProgress = builder.uploadProgress;
            }
            if (!_.isNil(builder.beforeUpload)) {
                this.BeforeUpload = builder.beforeUpload;
            }
            if (!_.isNil(builder.uploadFile)) {
                this.UploadFile = builder.uploadFile;
            }
            if (!_.isNil(builder.fileUploaded)) {
                this.FileUploaded = builder.fileUploaded;
            }
            if (!_.isNil(builder.beforeChunkUpload)) {
                this.BeforeChunkUpload = builder.beforeChunkUpload;
            }
            if (!_.isNil(builder.chunkUploaded)) {
                this.ChunkUploaded = builder.chunkUploaded;
            }
            if (!_.isNil(builder.uploadComplete)) {
                this.UploadComplete = builder.uploadComplete;
            }
            if (!_.isNil(builder.error)) {
                this.Error = builder.error;
            }
        }
    }
}
