-- CreateTable
CREATE TABLE "Folder_Sub" (
    "folder_sub_id" SERIAL NOT NULL,
    "folder_sub_name" TEXT NOT NULL,
    "folder_main_id" INTEGER NOT NULL,

    CONSTRAINT "Folder_Sub_pkey" PRIMARY KEY ("folder_sub_id")
);

-- CreateTable
CREATE TABLE "File" (
    "file_id" SERIAL NOT NULL,
    "file_name" TEXT NOT NULL,
    "folder_sub_id" INTEGER NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("file_id")
);

-- AddForeignKey
ALTER TABLE "Folder_Sub" ADD CONSTRAINT "Folder_Sub_folder_main_id_fkey" FOREIGN KEY ("folder_main_id") REFERENCES "Folder_Main"("folder_main_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_folder_sub_id_fkey" FOREIGN KEY ("folder_sub_id") REFERENCES "Folder_Sub"("folder_sub_id") ON DELETE RESTRICT ON UPDATE CASCADE;
