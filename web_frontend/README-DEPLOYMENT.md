# EmireQ Frontend - GCP Docker Deployment

## 🚀 Quick Deployment

### Prerequisites
1. **Google Cloud CLI** - [Install here](https://cloud.google.com/sdk/docs/install)
2. **Docker** - [Install here](https://docs.docker.com/get-docker/)
3. **GCP Project** with App Engine enabled

### Setup Steps

1. **Initialize Google Cloud**
   ```bash
   gcloud init
   gcloud app create
   ```

2. **Deploy with one command**
   ```bash
   ./deploy-gcp.sh
   ```

### Manual Commands

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Test Docker locally**
   ```bash
   npm run docker:build
   npm run docker:run
   # Visit http://localhost:8080
   ```

3. **Deploy to GCP**
   ```bash
   gcloud app deploy app.yaml
   ```

## 💰 Cost Optimization

### App Engine Standard Environment
- **Free Tier**: 28 instance hours/day
- **Auto-scaling**: Scales to 0 when no traffic
- **Pay-per-use**: Only pay when serving requests

### Estimated Monthly Costs
- **Light traffic** (< 1000 visits/month): **FREE**
- **Medium traffic** (10K visits/month): **~$5-15**
- **High traffic** (100K visits/month): **~$20-50**

## 🔧 Configuration

### Environment Variables (app.yaml)
```yaml
env_variables:
  NODE_ENV: production
  # Add your custom variables here
```

### Auto-scaling Settings
```yaml
automatic_scaling:
  min_instances: 0      # Scale to 0 for cost savings
  max_instances: 10     # Prevent runaway costs
  target_cpu_utilization: 0.6
```

## 🔐 GitHub Actions Setup

1. **Create GCP Service Account**
   ```bash
   gcloud iam service-accounts create github-actions
   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/appengine.deployer"
   ```

2. **Add GitHub Secrets**
   - `GCP_PROJECT_ID`: Your GCP project ID
   - `GCP_SA_KEY`: Service account JSON key

3. **Automatic deployment on push to main branch**

## 🌐 Custom Domain

1. **Add domain in GCP Console**
   ```bash
   gcloud app domain-mappings create your-domain.com
   ```

2. **Update DNS records** as shown in GCP Console

## 📊 Monitoring

- **GCP Console**: Monitor traffic, errors, and costs
- **Health check**: `https://your-app.appspot.com/health`
- **Logs**: `gcloud app logs tail -s default`

## 🔄 Updates

Simply push to main branch or run:
```bash
./deploy-gcp.sh
```

Your app will be updated with zero downtime!