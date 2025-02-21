import requests
import os
from dotenv import load_dotenv

load_dotenv()

#---------------------------------- POSTS GENERATION SERVICE USING AI ----------------------------------


class AIService:
    # step 1: provide the api config 
    api_key = os.getenv('DEEPSEEK_API_KEY')
    API_URL = "https://openrouter.ai/api/v1/chat/completions"
    HEADERS = {
        "Authorization": f"Bearer {api_key}"
    }

    @staticmethod
    def generate_post(content: str, platform: str) -> str:
        # step 2: prepare the prompts template
        prompts = {
            'linkedin': f"Transform this content into a professional LinkedIn post: {content}",
            'facebook': f"Transform this content into an engaging Facebook post: {content}",
            'twitter(X)': f"Transform this content into a concise Twitter post: {content}"
        }
        
        if platform not in prompts:
            return "Invalid platform"
        
        # step 3: send a request to the deepseek api; you can change the model 
        try:
            response = requests.post(
                url=AIService.API_URL,
                headers=AIService.HEADERS,
                json={"model": "deepseek/deepseek-chat:free", "messages": [{"role": "user", "content": prompts[platform]}]}
            )
            response_data = response.json()
            
            # step 4: process the response and return the generated post
            return response_data["choices"][0]["message"]["content"].strip()
        except Exception as e:
            print(f"Erreur lors de la génération du contenu: {str(e)}")
            return "Error generating content."