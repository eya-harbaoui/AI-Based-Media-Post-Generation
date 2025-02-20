import requests
import os
from dotenv import load_dotenv

load_dotenv()

#---------------------------------- POSTS GENERATION SERVICE USING AI ----------------------------------
class AIService:
    # STEP 1 : PROVIDE THE API CONFIG 
    api_key = os.getenv('DEEPSEEK_API_KEY')
    API_URL = "https://openrouter.ai/api/v1/chat/completions"
    HEADERS = {
        "Authorization": f"Bearer {api_key}"
    }

    @staticmethod
    def generate_post(content: str, platform: str) -> str:
        # STEP 2 : PREPARE THE PROMPTS TEMPLATE
        prompts = {
            'linkedin': f"Transform this content into a professional LinkedIn post: {content}",
            'facebook': f"Transform this content into an engaging Facebook post: {content}",
            'twitter(X)': f"Transform this content into a concise Twitter post: {content}"
        }
        
        if platform not in prompts:
            return "Invalid platform"
        #STEP 3 : SEND A REQUEST TO THE DEEPSEEK API : YOU CAN CHANGE THE MODEL 

        try:
            response = requests.post(
                url=AIService.API_URL,
                headers=AIService.HEADERS,
                json={"model": "deepseek/deepseek-chat:free", "messages": [{"role": "user", "content": prompts[platform]}]}
            )
            response_data = response.json()
        # STEP 4 : PROCESS THE RESPONSE AND RETURN THE GENERATED POST
            return response_data["choices"][0]["message"]["content"].strip()
        except Exception as e:
            print(f"Erreur lors de la génération du contenu: {str(e)}")
            return "Error generating content."
