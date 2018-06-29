# react-aws-icons

A collection of Amazon's AWS Simple Icons to be used in React apps.

As stated on Amazon's website: https://aws.amazon.com/architecture/icons/

> AWS Simple Icons are an official icon set that includes icons for several AWS products and resources. Customers and partners are permitted by AWS to use them to create architecture diagrams.

This package was primarily inspired by the [`react-feather`](https://github.com/carmelopullara/react-feather) icon set, and attempts to follow the same convention allowing you to import specific SVG icons from a wide selection of iconic diagram images.

Alternatively, a similar package that you may consider is: [`aws-react-material-icons`](https://github.com/philcruz/aws-react-material-icons) however, it is reliant on having `material-ui` as a peer dependency, and only contains roughly 28 of the "Compute" subset of the AWS Simple Icons.

### Installation:
```bash
npm i react-aws-icons
# Or, for consumers of yarn…
yarn add react-aws-icons
```

### Usage:

```javascript
import AWSIcon from 'react-aws-icons/dist/aws/logo/AWS';

class MyClass extends React.Component {
  render() {
    return <AWSIcon />
  }
}
```

Icons can be configured with a custom size prop, but the fills of the SVG icons are hard-coded.
```html
<CloudFrontIcon size={48} />
```
Without a custom size they are **24**×**24** by default.

Here is a complete list of the icon filenames _(excluding the **.js** extension)_ that are provided in this collection.

You can [preview them as HTML here](https://travomic.github.io/react-aws-icons/aws.html).


### aws/compute
- AMI
- AccessControlList
- AppLoadBalancer
- AutoScaling
- BeanstalkApplication
- BeanstalkDeployment
- C3
- CloudWatch
- Cluster
- Container
- ContainerCPU
- ContainerMachine
- CustomerGateway
- DB
- Download
- ECR
- EdgeLocation
- ElasticIPAddress
- ElasticNetworkAdapter
- ElasticNetworkInterface
- Endpoints
- Engine
- EngineMapRM3
- EngineMapRM5
- EngineMapRM7
- Flowlogs
- Forums
- HDFSCluster
- HostedZone
- Instance
- Instances
- InternetGateway
- Kinesis
- KinesisAnalytics
- KinesisFirehose
- KinesisStreams
- LambdaFunction
- LoadBalancer
- ManagementConsole
- NATGateway
- Peering
- Registry
- Rescue
- RouteTable
- Router
- SearchDocuments
- Spot
- SpotFleet
- Stream
- VPC
- VPN
- VPNConnection
- X1
---
### aws/db
- Attribute
- Attributes
- Cache
- DBM
- DBR
- DBS
- DenseComputeNode
- DenseStorageNode
- GlobalSecondaryIndex
- Item
- Items
- MSSQL
- MSSQLM
- Memcached
- Migration
- MySQL
- MySQLM
- Oracle
- OracleM
- PIOP
- PostgreSQL
- Redis
- SQLM
- Table
---
### aws/general
- Assignment
- Client
- DB
- DataCenter
- Disk
- Internet
- InternetCloud
- InternetWifi
- MobileClient
- MultiMedia
- OfficeBuilding
- Requester
- SAMLToken
- SSLPadlock
- Server
- TapeStorage
- Task
- User
- Users
- Workers
---
### aws/iot
- Action
- Actuator
- AlexaSkill
- Certificate
- DesiredState
- Echo
- FireTV
- FireTVStick
- HTTP
- HTTP2
- HardwareBoard
- LambdaFunction
- MQTT
- Policy
- ReportedState
- Rule
- Sensor
- Servo
- Shadow
- Simulator
- SmartHomeSkill
- Topic
- VoiceService
---
### aws/logo
- ACM
- APIGateway
- AWS
- AppStream
- ApplicationDiscoveryService
- Artifact
- Athena
- Batch
- Chime
- CloudDirectory
- CloudFormation
- CloudFront
- CloudHSM
- CloudSearch
- CloudTrail
- CloudWatch
- CodeBuild
- CodeCommit
- CodeDeploy
- CodePipeline
- CodeStar
- Cognito
- Config
- Connect
- DMS
- DataPipeline
- DeviceFarm
- DirectConnect
- DirectoryService
- DynamoDB
- DynamoDBAccelerator
- EC2
- ECS
- EFS
- ELB
- EMR
- ES
- ElasticBeanstalk
- ElasticCache
- ElasticTranscoder
- GameList
- Glacier
- Glue
- Greengrass
- IAM
- Inspector
- IoT
- KMS
- Kinesis
- Lambda
- Lex
- Lightsail
- MachineLearning
- Macie
- ManagedServices
- MechanicalTurk
- MigrationHub
- MobileAnalytics
- MobileHub
- OpsWorks
- Organizations
- Pinpoint
- Polly
- QuickSight
- RDS
- Redshift
- Rekognition
- Route53
- S3
- SES
- SMS
- SNS
- SQS
- SWF
- ServiceCatalog
- Shield
- Snowball
- StepFunctions
- StorageGateway
- SystemsManager
- TrustedAdvisor
- VPC
- WAF
- XRay
---
### aws/manage
- Apps
- Automation
- Changeset
- Checklist
- ChecklistCost
- ChecklistFaultTolerance
- ChecklistPerformance
- ChecklistSecurity
- Deployments
- Documents
- EventAlarm
- EventEventBased
- EventTimeBased
- Filter
- Instances
- Inventory
- Layers
- MaintenanceWindow
- Monitoring
- ParameterStore
- PatchManager
- Permissions
- Resources
- Rule
- RunCommand
- Stack
- StateManager
- Template
---
### aws/message
- Decider
- Email
- EmailNotification
- HTTPNotification
- Message
- Queue
- Topic
- Worker
---
### aws/sdk
- Android
- CLI
- Eclipse
- Java
- JavaScript
- Net
- NodeJS
- PHP
- PowerShell
- Python
- Ruby
- VisualStudio
- Xamerin
- iOS
---
### aws/security
- ACM
- DataEncryptionKey
- EncryptedData
- IAM
- Inspector
- LongTermCredential
- MFAToken
- Permissions
- Role
- STS
- STSToken
- TemporaryCredential
---
### aws/storage
- Bucket
- BucketWithObjects
- CachedVolume
- EBS
- EFSFilesystem
- GlacierArchive
- GlacierVault
- ImportExport
- NonCachedVolume
- Object
- Snapshot
- VirtualTapeLibrary
- Volume
---
### aws/thing
- AVS
- Bank
- Bicycle
- Camera
- Car
- Cart
- Coffeepot
- DoorLock
- Factory
- Generic
- House
- LightBulb
- Medical
- Police
- Thermostat
- Travel
- Utility
- WindFarm
---
### aws/work
- Docs
- Mail
- Spaces
---

These names are based on the SVG pathnames of the original [ZIP](https://s3-us-west-2.amazonaws.com/awswebanddesign/Architecture+Icons/AWS-Arch-Icon-Sets_Feb-18/PNG%2C+SVG%2C+EPS_18.02.22.zip) source file.  Liberties were taken to rename and normalize them into grouped directories. 

There will likely be changes and improvements in future releases of this package, but will follow semantic versioning guidelines to safeguard against breaking existing implementations.
