/**
 * Storage permissions.
 *
 * @id - Used to identify the rule on permissions and upload.
 * @folder - Folder where the files will be saved
 * @maxSizeInBytes - Max allowed size in bytes
 * @bypassWritingPermissions - Does not validate if the user has permission to write
 * @publicRead - The file can be publicly accessed via the URL without the need for a signed token
 */
export default class Storage {
  static get values() {
    return {
      userAvatarsProfiles: {
        id: 'userAvatarsProfiles',
        folder: 'user/avatars/profile/:userId',
        maxSizeInBytes: 10 * 1024 * 1024,
        bypassWritingPermissions: true,
        publicRead: true,
      },
      settingsLogos: {
        id: 'settingsLogos',
        folder: 'tenant/:tenantId/settings/logos',
        maxSizeInBytes: 10 * 1024 * 1024,
        publicRead: true,
      },
      settingsBackgroundImages: {
        id: 'settingsBackgroundImages',
        folder:
          'tenant/:tenantId/settings/backgroundImages',
        maxSizeInBytes: 10 * 1024 * 1024,
        publicRead: true,
      },


      managerPhotos: {
        id: 'managerPhotos',
        folder: 'tenant/:tenantId/manager/photos',
        maxSizeInBytes: 100 * 1024 * 1024,
      },



      fundPhotos: {
        id: 'fundPhotos',
        folder: 'tenant/:tenantId/fund/photos',
        maxSizeInBytes: 1000000,
      },
      fundIcon: {
        id: 'fundIcon',
        folder: 'tenant/:tenantId/fund/icon',
        maxSizeInBytes: 100 * 1024 * 1024,
      },

      assetIcon: {
        id: 'assetIcon',
        folder: 'tenant/:tenantId/asset/icon',
        maxSizeInBytes: 100 * 1024 * 1024,
      },



      orderAttachments: {
        id: 'orderAttachments',
        folder: 'tenant/:tenantId/order/attachments',
        maxSizeInBytes: 1000000,
      },



      documentFile: {
        id: 'documentFile',
        folder: 'tenant/:tenantId/document/file',
        maxSizeInBytes: 100 * 1024 * 1024,
      },


    };
  }
}
