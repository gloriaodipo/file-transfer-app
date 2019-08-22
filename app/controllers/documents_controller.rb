class DocumentsController < ApplicationController
  # GET all documents
  def index
    @documents = Document.all
    render "index"
  end

  # GET single file
  def show
    @document = Document.find(params[:id])
    render "view_doc"
  end

  # POST a document
  def create
    document = Document.new(document_params)
    document.user = current_user
    if document.valid?
      document.save!
      flash[:success] = ["Upload was successful"]
      redirect_to documents_path
    else
      flash[:error] = document.errors.full_messages()
      redirect_to new_document_path
    end
  end

  def new
    @document = Document.new
    render "new_doc"
  end

  private

  def document_params
    params.require(:document).permit(:file_name, files: [])
  end
end
