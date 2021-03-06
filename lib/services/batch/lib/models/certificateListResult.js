/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the CertificateListResult class.
 * @constructor
 * Response to a CertificateOperation.List request.
 * @member {array} [value] The list of certificates.
 * 
 * @member {string} [odatanextLink] The URL to get the next set of results.
 * 
 */
function CertificateListResult() {
}

util.inherits(CertificateListResult, Array);

/**
 * Defines the metadata of CertificateListResult
 *
 * @returns {object} metadata of CertificateListResult
 *
 */
CertificateListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CertificateListResult',
    type: {
      name: 'Composite',
      className: 'CertificateListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CertificateElementType',
                type: {
                  name: 'Composite',
                  className: 'Certificate'
                }
            }
          }
        },
        odatanextLink: {
          required: false,
          serializedName: 'odata\\.nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = CertificateListResult;
