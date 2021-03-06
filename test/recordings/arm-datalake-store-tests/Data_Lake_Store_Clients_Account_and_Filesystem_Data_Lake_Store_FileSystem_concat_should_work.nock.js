// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .post('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?sources=adlssdkfolder01%2Femptyfile.txt%2Cadlssdkfolder01%2Fcontentfile.txt&op=CONCAT&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '8c170b1a-1c82-4d66-8f39-3c087c1b2af4',
  'set-cookie': [ 'UserPrincipalSession=b1ea0031-895d-4513-97d3-1c98ab6affb7; path=/; secure; HttpOnly' ],
  'server-perf': '[8c170b1a-1c82-4d66-8f39-3c087c1b2af4][ AuthTime::1400.70159111147::PostAuthTime::526.065025058658 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:008 ms]%0a[GetFileStatus :: 00:00:011 ms]%0a[FsMultiModifyStream :: 00:00:691 ms]%0a[CONCAT :: 00:00:706 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:11 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .post('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?sources=adlssdkfolder01%2Femptyfile.txt%2Cadlssdkfolder01%2Fcontentfile.txt&op=CONCAT&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '8c170b1a-1c82-4d66-8f39-3c087c1b2af4',
  'set-cookie': [ 'UserPrincipalSession=b1ea0031-895d-4513-97d3-1c98ab6affb7; path=/; secure; HttpOnly' ],
  'server-perf': '[8c170b1a-1c82-4d66-8f39-3c087c1b2af4][ AuthTime::1400.70159111147::PostAuthTime::526.065025058658 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:008 ms]%0a[GetFileStatus :: 00:00:011 ms]%0a[FsMultiModifyStream :: 00:00:691 ms]%0a[CONCAT :: 00:00:706 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:11 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136031607,\"modificationTime\":1464136031690,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c7a66acf-0b83-4577-a72b-5cc79564f304',
  'set-cookie': [ 'UserPrincipalSession=519768e5-7d58-4b40-866c-062c12b633a7; path=/; secure; HttpOnly' ],
  'server-perf': '[c7a66acf-0b83-4577-a72b-5cc79564f304][ AuthTime::1520.88262515632::PostAuthTime::574.394084810163 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:082 ms]%0a[GetFileStatus :: 00:00:084 ms]%0a[GETFILESTATUS :: 00:00:085 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:12 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136031607,\"modificationTime\":1464136031690,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c7a66acf-0b83-4577-a72b-5cc79564f304',
  'set-cookie': [ 'UserPrincipalSession=519768e5-7d58-4b40-866c-062c12b633a7; path=/; secure; HttpOnly' ],
  'server-perf': '[c7a66acf-0b83-4577-a72b-5cc79564f304][ AuthTime::1520.88262515632::PostAuthTime::574.394084810163 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:082 ms]%0a[GetFileStatus :: 00:00:084 ms]%0a[GETFILESTATUS :: 00:00:085 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:12 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; }]];