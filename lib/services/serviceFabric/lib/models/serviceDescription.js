/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ServiceDescription class.
 * @constructor
 * @member {string} [applicationName]
 * 
 * @member {string} [serviceName]
 * 
 * @member {string} [serviceTypeName]
 * 
 * @member {object} [partitionDescription]
 * 
 * @member {number} [partitionDescription.partitionScheme]
 * 
 * @member {number} [partitionDescription.count]
 * 
 * @member {array} [partitionDescription.names]
 * 
 * @member {string} [partitionDescription.lowKey]
 * 
 * @member {string} [partitionDescription.highKey]
 * 
 * @member {string} [placementConstraints]
 * 
 * @member {object} [correlationScheme]
 * 
 * @member {string} [correlationScheme.serviceName]
 * 
 * @member {number} [correlationScheme.serviceCorrelationScheme]
 * 
 * @member {object} [serviceLoadMetrics]
 * 
 * @member {string} [serviceLoadMetrics.serviceName]
 * 
 * @member {number} [serviceLoadMetrics.serviceCorrelationScheme]
 * 
 * @member {object} [servicePlacementPolicies]
 * 
 * @member {string} [servicePlacementPolicies.serviceName]
 * 
 * @member {number} [servicePlacementPolicies.serviceCorrelationScheme]
 * 
 * @member {number} [flags]
 * 
 * @member {string} ServiceKind Polymorhpic Discriminator
 * 
 */
function ServiceDescription() {
}

/**
 * Defines the metadata of ServiceDescription
 *
 * @returns {object} metadata of ServiceDescription
 *
 */
ServiceDescription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceDescription',
    type: {
      name: 'Composite',
      polymorphicDiscriminator: 'ServiceKind',
      uberParent: 'ServiceDescription',
      className: 'ServiceDescription',
      modelProperties: {
        applicationName: {
          required: false,
          serializedName: 'ApplicationName',
          type: {
            name: 'String'
          }
        },
        serviceName: {
          required: false,
          serializedName: 'ServiceName',
          type: {
            name: 'String'
          }
        },
        serviceTypeName: {
          required: false,
          serializedName: 'ServiceTypeName',
          type: {
            name: 'String'
          }
        },
        partitionDescription: {
          required: false,
          serializedName: 'PartitionDescription',
          type: {
            name: 'Composite',
            className: 'PartitionDescription'
          }
        },
        placementConstraints: {
          required: false,
          serializedName: 'PlacementConstraints',
          type: {
            name: 'String'
          }
        },
        correlationScheme: {
          required: false,
          serializedName: 'CorrelationScheme',
          type: {
            name: 'Composite',
            className: 'ServiceCorrelationDescription'
          }
        },
        serviceLoadMetrics: {
          required: false,
          serializedName: 'ServiceLoadMetrics',
          type: {
            name: 'Composite',
            className: 'ServiceCorrelationDescription'
          }
        },
        servicePlacementPolicies: {
          required: false,
          serializedName: 'ServicePlacementPolicies',
          type: {
            name: 'Composite',
            className: 'ServiceCorrelationDescription'
          }
        },
        flags: {
          required: false,
          serializedName: 'Flags',
          type: {
            name: 'Number'
          }
        },
        ServiceKind: {
          required: true,
          serializedName: 'ServiceKind',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ServiceDescription;
